import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import backgroundImage from "./img.jpg";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "7%",
    maxWidth: "400px",
  };

  const Divimg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    paddingTop: "5%",
    paddingBottom: "15%",
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
      <div className="login" style={containerStyle}>
        <div className="mb-3">
          <h1 style={h1Style}>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" style={labelStyle} className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" style={labelStyle} className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-dark">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
