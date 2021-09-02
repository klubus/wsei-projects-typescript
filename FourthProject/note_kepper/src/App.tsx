import React, { Component, FormEventHandler } from "react";
import moment from "moment";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import { Note } from "./types/types";
import NotesList from "./components/NotesList/NotesList";
import { notesCollection } from "./firebase/firestoreUtils";

interface AppState {
  notes: Note[];
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  state = {
    notes: [],
  };

  getFirestoreData = () => {
    const subscribe = notesCollection.onSnapshot((snapshot) => {
      const notesFormCollection = snapshot.docs.map((doc) => {
        console.log(doc);
      });
    });
  };

  componentDidMount() {
    this.getFirestoreData();
  }

  // componentDidUpdate(prevProps, prevState) {}

  addNote = (e: any) => {
    e.preventDefault();

    const note: Note = {
      id: 1,
      title: e.target.noteTitle.value,
      content: e.target.noteContent.value,
      color: e.target.noteColor.value,
      isPinned: false,
      date: moment(new Date()).format("DD/MM/YYYY"),
    };

    this.setState({
      notes: [...this.state.notes, note],
    });

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
