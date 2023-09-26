import React from "react";

const alertStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  height: "20px",
};

const transparentBackgroundStyle = {
  backgroundColor: "transparent",
  border: "none",
  color: "white",
};

function Alert(props) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ ...alertStyle }}>
        {props.alert && (
          <div
            style={{ ...transparentBackgroundStyle }}
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            {props.alert.msg}
          </div>
        )}
      </div>
      {/* Your other content here */}
    </div>
  );
}

export default Alert;
