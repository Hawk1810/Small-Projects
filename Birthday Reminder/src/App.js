import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <article className="container">
        <h3>0 birthdays today</h3>
        <List person={person} />
        <button className="btn" onClick={() => setPerson([])}>
          clear all
        </button>
      </article>
    </main>
  );
}

export default App;
