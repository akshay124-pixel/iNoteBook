import React from "react";

const Noteitem = (props) => {
  const { notes } = props;
  return (
    <div className="col-md-3 my-3">
      <div class="card w-75 mb-3">
        <div class="card-body">
          <h5 class="card-title">{notes.title}</h5>
          <p class="card-text">{notes.description}</p>
          <i className="fa-solid fa-trash mx-2" style={{ color: "#ff4314" }} />
          <i
            className="fa-solid fa-file-pen mx2"
            style={{ color: "#0453dc" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
