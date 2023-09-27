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

  const svgBackground = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1024&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M1080,271.896C1126.991,274.504,1178.253,258.459,1199.503,216.467C1219.533,176.885,1192.12,133.946,1168.953,96.115C1147.269,60.707,1121.513,22.081,1080,21.326C1037.613,20.555,1005.352,55.444,985.256,92.772C966.346,127.897,962.804,169.103,981.456,204.366C1001.411,242.094,1037.386,269.531,1080,271.896" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M1117.8358652105337 318.38376491421303L1225.9639037853567 320.2711468480974 1174.7309573987718 157.13539801892074z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float3"></path>
        <path d="M547.975486269761 366.9292176687379L501.1943965852059 230.64528138047172 416.91279466497394 324.2494832429334z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M677.628,120.477C698.941,120.69,718.894,109.828,729.78,91.504C740.906,72.778,742.759,48.919,731.056,30.548C720.043,13.261,698.125,9.765,677.628,9.64C656.833,9.513,634.057,12.24,623.059,29.889C611.583,48.305,616.053,71.893,627.25,90.48C638.059,108.423,656.682,120.268,677.628,120.477" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M59.979,331.259C83.119,332.086,103.999,317.508,115.117,297.197C125.809,277.664,123.627,254.328,112.718,234.915C101.558,215.056,82.756,198.709,59.979,199.08C37.696,199.443,20.352,216.78,10.133,236.585C0.81,254.655,1.797,275.493,11.27,293.485C21.53,312.971,37.971,330.472,59.979,331.259" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M698.998,651.748C739.649,654.839,786.788,651.58,807.521,616.478C828.454,581.036,810.118,537.046,786.766,503.149C766.848,474.238,734.041,461.095,698.998,458.952C658.619,456.483,610.801,456.19,590.439,491.146C570.012,526.215,593.009,568.269,615.737,601.893C635.153,630.617,664.427,649.119,698.998,651.748" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M1286.014,487.472C1314.034,486.301,1338.155,470.927,1353.571,447.5C1371.029,420.97,1384.254,388.399,1369.829,360.105C1354.383,329.808,1319.969,313.102,1286.014,314.987C1254.814,316.719,1232.245,341.372,1216.904,368.595C1201.913,395.197,1192.563,427.191,1207.91,453.589C1223.197,479.884,1255.625,488.742,1286.014,487.472" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M1232.261169176995 152.46546669838457L1257.7297257129703 21.441101890266566 1126.7053609048521-4.027454645708588 1101.236804368877 126.9969101624094z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M235.40237172310447 201.10413418168147L90.19177744074346 120.43158180259205 90.19177744074346 265.642176084953z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M559.641,683.302C604.357,683.473,644.602,658.012,667.319,619.496C690.426,580.319,694.642,531.902,672.305,492.281C649.59,451.989,605.882,427.385,559.641,428.497C515.171,429.567,477.687,458.652,455.99,497.485C434.867,535.291,432.285,580.855,453.382,618.676C475.027,657.479,515.209,683.132,559.641,683.302" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1024">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <style>
            @keyframes float1 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-10px, 0)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float1 {
                    animation: float1 5s infinite;
                }

                @keyframes float2 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-5px, -5px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float2 {
                    animation: float2 4s infinite;
                }

                @keyframes float3 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(0, -10px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float3 {
                    animation: float3 6s infinite;
                }
        </style>
    </defs>
</svg>`;

  const backgroundStyles = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      svgBackground
    )}")`,
    width: "100%",
    height: "100%",
    paddingTop: "2%",
    paddingBottom: "6%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const h1Style = {
    color: "white",
    textAlign: "center",
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <div className="Background" style={backgroundStyles}>
      <div className="signup" color="white" style={containerStyle}>
        <div className="mb-3">
          <h1 style={h1Style}>SignUp</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              style={{ color: "White" }}
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

          <button type="submit" className="bn5">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
