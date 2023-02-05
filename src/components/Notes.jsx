import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

function Notes({ id, text, date, deleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <span>{date}</span>
        <MdOutlineDeleteForever
          size="1.4rem"
          className="delete"
          onClick={() => deleteNote(id)}
        ></MdOutlineDeleteForever>
      </div>
    </div>
  );
}

export default Notes;
