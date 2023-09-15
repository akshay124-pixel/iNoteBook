import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteinitial = [
    {
      _id: "64fecc1175093831ef545bba1",
      user: "64fc3de56db3063648dd2165",
      title: "Title",
      description: "Write Here......",
      tag: "personal",
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    },
    {
      _id: "64fecc1175509331ef545bba1",
      user: "64fc3de56db3063648dd2165",
      title: "Title",
      description: "Write Here......",
      tag: "personal",
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    },
    {
      _id: "64fecc1175093631e8f545bba1",
      user: "64fc3de56db3063648dd2165",
      title: "Title",
      description: "Write Here......",
      tag: "personal",
      date: "2023-09-11T08:13:05.992Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteinitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
