import React from "react";
import { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleclick = (e) => {
    e.preventDefault();
    addNote(...note);
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const divStyle = {
    marginRight: "28%",
    marginLeft: "21%",
    marginTop: "4%",
  };

  return (
    <div>
      <div className="conatiner" style={divStyle}>
        <h1>Add Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={onchange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
