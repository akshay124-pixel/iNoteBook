import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const divStyle = {
    marginLeft: "20%",
  };
  const context = useContext(NoteContext);
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="Note" style={divStyle}>
        <div className="row my-3">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
