import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([
    { title: "Sample note", content: "Sample content. hit the x button to delete it." }
  ]);
  function sendValue(title, content) {
    setNotesArray((prevValue) => {
      return [...prevValue, { title: [title], content: [content] }];
    });
  }
  function deleteNote(noteIndex) {
    setNotesArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== noteIndex;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea sendValue={sendValue} />
      {notesArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
