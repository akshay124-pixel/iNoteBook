import React from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const divStyle = {
    marginLeft: "20%",
  };
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="Note" style={divStyle}>
      <div className="row my-3">
        {notes.map((notes) => {
          return <Noteitem key={notes._id} notes={notes} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
