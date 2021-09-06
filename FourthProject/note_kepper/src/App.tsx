import React, { Component, FormEventHandler } from "react";
import moment from "moment";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import { Note } from "./types/types";
import NotesList from "./components/NotesList/NotesList";
import {
  addNoteToCollection,
  notesCollection,
} from "./firebase/firestoreUtils";

interface AppState {
  notes: Note[] | any;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  state = {
    notes: [],
  };

  getFirestoreData = () => {
    const subscribe = notesCollection.onSnapshot((snapshot) => {
      const notesFormCollection = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const sortedArray = notesFormCollection.sort(
        (noteOne: any, noteTwo: any) => {
          return Number(noteTwo.isPinned) - Number(noteOne.isPinned);
        }
      );

      console.log(sortedArray);

      this.setState({
        notes: notesFormCollection,
      });
    });
  };

  componentDidMount() {
    this.getFirestoreData();
  }

  // componentDidUpdate(prevProps, prevState) {}

  addNote = (e: any) => {
    e.preventDefault();

    const note: Note | any = {
      title: e.target.noteTitle.value,
      content: e.target.noteContent.value,
      color: e.target.noteColor.value,
      isPinned: false,
      date: moment(new Date()).format("DD/MM/YYYY"),
    };

    addNoteToCollection(note);

    e.target.reset();
  };

  render() {
    return (
      <>
        <AddNoteForm addNote={this.addNote} />
        <NotesList notes={this.state.notes} />
      </>
    );
  }
}

export default App;
