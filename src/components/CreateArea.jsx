import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function addNote(event) {
    event.preventDefault();
    var {
      title: { value: title },
      content: { value: content }
    } = event.target;
    props.sendValue(title, content);
    setNote({ title: "", content: "" });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: [value] };
    });
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button type="submit" style={{fontSize:"32px"}}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
