import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NoteList from './components/NoteList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: [
        {
          message: "Yo!",
          id: 0
        }
      ],
      nextId: 1
    }

    this.onUpdateNote = this.onUpdateNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onAddNote(e) {
    e.preventDefault();
    var nextId = this.state.children.length;
    var children = this.state.children.slice();
    children.push({
      message: "",
      id: nextId
    })
    this.setState({
      children: children,
      nextId: nextId
    });
  }

  onUpdateNote(id, message) {
    var notes = this.state.children.slice();
    notes[id].message = message;
    this.setState({
      children: notes
    })
  }

  onDeleteNote(id) {
    console.log(id);
    var notes = this.state.children.slice();
    notes.splice(id,1);
    console.log(notes);
    // notes.map((note, index)=>{
    //   note.id = index
    // });
    this.setState({
      children: notes
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Notes App</h2>
        </div>
        <div className="actions">
          <button onClick={this.onAddNote.bind(this)}>New Note</button>
        </div>
        <div className="notes">
          <NoteList children={this.state.children} onUpdateNote={this.onUpdateNote} onDeleteNote={this.onDeleteNote} />
        </div>
      </div>
    );
  }
}

export default App;
