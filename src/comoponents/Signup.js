import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
      props.showAlert("Account Created Successfully", "Success");
    } else {
      props.showAlert("Invalid credentials", "Danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const DivStyle = {
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "5%",
  };
  return (
    <div style={DivStyle}>
      <div className="mb-3">
        <h1>SignUp</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
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
          <label htmlFor="email" className="form-label">
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
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
          <div id="passwordHelp" className="form-text">
            Your password must be 5-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
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

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
