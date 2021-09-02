import { firestore } from "./firebaseConfig";

export const notesCollection = firestore.collection("notes");
