import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteinitial = [
    {
      _id: "64fecc11750973831ef545bba1",
      user: "64fc3de56db763063648dd2165",
      title: "Title",
      description: "Write Here......",
      tag: "personal",
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    },
    {
      _id: "64fecc1175685093831ef545bba1",
      user: "64fc3de56db308763648dd2165",
      title: "Title",
      description: "Write Here......",
      tag: "personal",
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(noteinitial);

  //ADD NOTE
  const addNote = (title, description, tag) => {
    console.log("Adding a New Note");
    const note = {
      _id: "64fecc11750973831ef545bba1",
      user: "64fc3de56db30638648dd2165",
      title,
      description,
      tag,
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    };
    setNotes([...notes, note]);
  };

  //DELETE NOTE
  const deleteNote = () => {};

  //EDIT NOTE
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
