import AddNotes from "./AddNotes";
import Notes from "./Notes";

const NoteList = ({ notes, addNewNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Notes
          deleteNote={deleteNote}
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNotes addNewNote={addNewNote} />
    </div>
  );
};

export default NoteList;
