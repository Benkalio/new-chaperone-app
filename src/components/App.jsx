import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Note title="Store Your Ideas" content="Start here..." />
      <Footer />
    </div>
  );
}

export default App;
