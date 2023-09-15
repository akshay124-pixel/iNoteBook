const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Akshyisagoodboy$";
// ROUTE 1
// Create User  using :POST "/api/auth/createuser" .
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name.").isLength({ min: 3 }),
    body("email", "Enter a Valid Email.").isEmail(),
    body("password", "Enter a Valid Password.").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Make the route handler async
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check whether a user with this email already exists
      let existingUser = await User.findOne({ email: req.body.email });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "A user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Respond with the created user data in JSON format
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "nternal Server Error" }); // Return an error response with JSON
    }
  }
);

// ROUTE 2
//Autainticate the user  using :POST "/api/auth/login" .
router.post(
  "/login",
  [
    body("email", "Enter a Valid Email.").isEmail(),
    body("password", "Password cannot be blank.").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);
// ROUTE 3
// Get Login User Details using :POST "/api/auth/getuser" . Login Required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
