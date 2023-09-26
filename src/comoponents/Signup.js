import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import backgroundImage from "./img.jpg";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    maxWidth: "400px",
  };

  const Divimg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    paddingTop: "5%", // Adjust the padding for smaller screens
    paddingBottom: "8%", // Adjust the padding for smaller screens
  };

  const h1Style = {
    color: "white",
    textAlign: "center",
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <div className="Background" style={Divimg}>
      <div className="signup" color="white" style={containerStyle}>
        <div className="mb-3">
          <h1 style={h1Style}>SignUp</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              style={{ color: "green" }}
              className="form-label"
            >
              Name
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={labelStyle}>
              Email address
            </label>
            <input
              onChange={onChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text" style={labelStyle}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={labelStyle}>
              Password
            </label>
            <input
              onChange={onChange}
              minLength={5}
              required
              type="password"
              name="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
            />
            <div id="passwordHelp" className="form-text" style={labelStyle}>
              Your password must be 5-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmpassword"
              className="form-label"
              style={labelStyle}
            >
              Confirm Password
            </label>
            <input
              onChange={onChange}
              minLength={5}
              required
              type="password"
              name="confirmpassword"
              className="form-control"
              id="confirmpassword"
            />
          </div>

          <button type="submit" className="btn btn-dark">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
