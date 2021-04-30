import React from "react";

function Note(props) {
  var { id, title, content, deleteNote } = props;
  return (
    <div className="note">
      <button
        onClick={() => {
          deleteNote(id);
        }}
        style={{fontSize:"23px"}}
      >
        x
      </button>
      <h1>{title}</h1>
      <p>{content}</p>
      
    </div>
  );
}

export default Note;
