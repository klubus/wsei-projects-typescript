import React, { FC } from "react";

const AddNoteForm: FC<{ addNote: any }> = ({ addNote }) => {
  return (
    <form onSubmit={addNote}>
      <input type="text" name="noteTitle" placeholder="Note title" />
      <textarea name="noteContent" />
      <label htmlFor="noteColor">Choose note color: </label>
      <select name="noteColor" id="noteColor">
        <option value="lightgreen">Light green</option>
        <option value="lightgoldenrodyellow">Light yellow</option>
        <option value="lightcoral">Light coral</option>
      </select>
      <button type="submit">add note</button>
    </form>
  );
};

export default AddNoteForm;
