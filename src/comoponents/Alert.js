import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";

function Alert(props) {
  // Fix the capitalize function and handle "danger" case
  const capitalize = (word) => {
    if (word === "danger") {
      return "Error";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    // Use optional chaining to check if props.alert exists
    props.alert?.type && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alert;
