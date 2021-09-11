import { firestore } from "./firebaseConfig";
import moment from "moment";

export const notesCollection = firestore.collection("notes");

export const addNoteToCollection = (note: any) => {
  notesCollection.add(note);
};

export const deleteNoteFromCollection = (noteIdToDelete: string) => {
  notesCollection.doc(noteIdToDelete).delete();
};

export const togglePinNote = (note: any) => {
  notesCollection.doc(note.id).update({
    ...note,
    isPinned: !note.isPinned,
  });
};

export const editNoteTitle = (note: any, newNoteTitle: string) => {
  notesCollection.doc(note.id).update({
    ...note,
    title: newNoteTitle,
    edited: moment(new Date()).format("DD/MM/YYYY"),
  });
};

export const editNoteContent = (note: any, newNoteContent: string) => {
  notesCollection.doc(note.id).update({
    ...note,
    content: newNoteContent,
    edited: moment(new Date()).format("DD/MM/YYYY"),
  });
};
