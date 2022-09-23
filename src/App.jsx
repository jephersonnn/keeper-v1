import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import note from "./note";

function App() {
  return (
    <div>
      <Header />
      {note.map(noteItem => 
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      )}
      <Footer />
    </div>
  );
}
export default App;
