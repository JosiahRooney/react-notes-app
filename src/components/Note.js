import React from 'react';

const Note = (props) => {
  return (
    <div className="note">
      <div className="col-md-12">
        <div className="col-md-6">
          <label htmlFor="msg">Message {props.id}</label>
        </div>
        <div className="col-md-6">
          <button onClick={e=>{props.onDeleteNote(props.id)}}>-</button>
        </div>
      </div>

      <div className="col-md-12">
        <textarea
          id="msg"
          className="note-message"
          value={props.message}
          onChange={e=>
            props.onUpdateNote(props.id, e.target.value)
          }></textarea>
      </div>
    </div>
  )
}

export default Note;
