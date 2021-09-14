import React, { FC } from "react";
import "./AddNoteForm.scss";

const AddNoteForm: FC<{ addNote: any }> = ({ addNote }) => {
  return (
    <form onSubmit={addNote} className="form__wrapper">
      <input
        type="text"
        name="noteTitle"
        placeholder="Note title"
        className="noteTitle__input"
      />
      <textarea name="noteContent" className="noteContent__textarea" />
      <label htmlFor="noteColor">Choose note color: </label>
      <select name="noteColor" id="noteColor">
        <option value="lightgreen">Light green</option>
        <option value="lightgoldenrodyellow">Light yellow</option>
        <option value="lightcoral">Light coral</option>
      </select>
      <button type="submit" className="submit__btn">
        add note
      </button>
    </form>
  );
};

export default AddNoteForm;
