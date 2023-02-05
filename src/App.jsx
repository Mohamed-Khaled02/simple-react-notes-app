import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import Header from "./Header";
import Search from "./Search";

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);
  function darkModeHandler() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNewNote = (text) => {
    const newDate = new Date().toLocaleDateString;
    const newNote = {
      id: nanoid(),
      text: text,
      date: newDate,
    };

    setNotes([...notes, newNote]);
  };

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header darkModeHandler={darkModeHandler} />
        <Search handelChange={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNewNote={addNewNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
