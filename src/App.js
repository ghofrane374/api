import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList/UserList";

function App() {
  const [show, setshow] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          if (show) setshow(false);
          else setshow(true);
        }}
      >
        SHOW
      </button>
      {show ? <UserList></UserList> : null}
    </div>
  );
}

export default App;
