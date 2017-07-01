import React from 'react';
import Note from './Note'

const NoteList = (props) => {
  let notes = props.children.map(note=>{
    return <Note
      key={note.id}
      id={note.id}
      message={note.message}
      onUpdateNote={props.onUpdateNote} 
      onDeleteNote={props.onDeleteNote} />
  });
  return (
    <div className="note-list">
      {notes}
    </div>
  )
}

export default NoteList;
