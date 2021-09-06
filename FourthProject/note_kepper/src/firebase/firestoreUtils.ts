import { firestore } from "./firebaseConfig";

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
