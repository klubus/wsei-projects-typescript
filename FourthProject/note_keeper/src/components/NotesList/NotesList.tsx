import React, { FC } from "react";
import {
  deleteNoteFromCollection,
  togglePinNote,
  editNoteTitle,
  editNoteContent,
} from "../../firebase/firestoreUtils";
import { Note } from "../../types/types";
import pinIcon from "../../assets/icons/pin.svg";
import "./NotesList.scss";

const NotesList: FC<{ notes: Note[] }> = ({ notes }) => {
  return (
    <ul className="notes_wrapper">
      {notes.map((note) => {
        const { id, title, content, date, color, isPinned, edited } = note;
        return (
          <li key={id} className="note_wrapper">
            <div className="note_title_content_wrapper">
              {isPinned && (
                <img src={pinIcon} alt="pinned" className="pin_icon" />
              )}
              <input
                type="text"
                value={title}
                onChange={(e) => editNoteTitle(note, e.target.value)}
                className={`note_title_input ${color}`}
              />
              <textarea
                value={content}
                onChange={(e) => editNoteContent(note, e.target.value)}
                className={`note_content_textarea ${color}`}
              />
            </div>

            <p>Created: {date}</p>
            {edited && <p>Edited: {edited}</p>}

            <button
              onClick={() => togglePinNote(note)}
              className="pinNote__btn"
            >
              {isPinned ? "unpin note" : "pin note"}
            </button>
            <button
              onClick={() => deleteNoteFromCollection(id)}
              className="deleteNote__btn"
            >
              delete note
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NotesList;
