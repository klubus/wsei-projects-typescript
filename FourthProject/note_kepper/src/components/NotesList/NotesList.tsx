import React, { FC } from "react";
import {
  deleteNoteFromCollection,
  togglePinNote,
} from "../../firebase/firestoreUtils";
import { Note } from "../../types/types";
import pinIcon from "../../assets/icons/pin.svg";
import "./NotesList.scss";

const NotesList: FC<{ notes: Note[] }> = ({ notes }) => {
  return (
    <ul className="notes_wrapper">
      {notes.map((note) => {
        const { id, title, content, date, color, isPinned } = note;
        return (
          <li key={id}>
            <div className="note_title_content_wrapper">
              {isPinned && (
                <img src={pinIcon} alt="pinned" className="pin_icon" />
              )}
              <input
                type="text"
                value={title}
                className={`note_title_input ${color}`}
              />
              <textarea
                value={content}
                className={`note_content_textarea ${color}`}
              />
            </div>

            <p>{date}</p>
            <button onClick={() => togglePinNote(note)}>
              {isPinned ? "unpin note" : "pin note"}
            </button>
            <button onClick={() => deleteNoteFromCollection(id)}>
              delete note
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NotesList;
