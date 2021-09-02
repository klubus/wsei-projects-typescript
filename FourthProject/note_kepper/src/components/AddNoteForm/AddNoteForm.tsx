import React, { FC } from "react";

const AddNoteForm: FC<{ addNote: any }> = ({ addNote }) => {
  return (
    <form onSubmit={addNote}>
      <input type="text" name="noteTitle" placeholder="Note title" />
      <textarea name="noteContent" />
      <label htmlFor="noteColor">Choose note color: </label>
      <select name="noteColor" id="noteColor">
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
      </select>
      <button type="submit">add note</button>
    </form>
  );
};

export default AddNoteForm;
