import React, { useState } from "react";

function AddNotes({ addNewNote }) {
  const [newText, setNewText] = useState("");

  const textLimit = 200;

  function handelChange(e) {
    if (textLimit - newText.length > 0) {
      setNewText(e.target.value);
    }
  }

  function handelSaveNote() {
    if (newText.trim().length > 0) {
      addNewNote(newText);
    } else {
      alert("Note is Empty");
    }
    setNewText("");
  }

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add note..."
        value={newText}
        onChange={handelChange}
      ></textarea>

      <div className="note-footer">
        <span>{textLimit - newText.length} Remaining</span>
        <button className="save" onClick={handelSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNotes;
