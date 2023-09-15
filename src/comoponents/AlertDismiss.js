import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function AlertDismiss(props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <div className="vw-100">
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {props.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertDismiss}
          ></button>
        </div>
      )}
    </div>
  );
}

export default AlertDismiss;
