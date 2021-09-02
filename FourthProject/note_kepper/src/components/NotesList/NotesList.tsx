import React, { FC } from "react";
import { Note } from "../../types/types";

const NotesList: FC<{ notes: Note[] }> = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>{note.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
