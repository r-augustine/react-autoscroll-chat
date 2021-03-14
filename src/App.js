import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";

function App() {
  const [messages, setMessages] = useState([]);

  const handleOnClick = () => {
    setMessages([...messages, Math.random()]);
  };

  return (
    <div className='App'>
      <Chat messages={messages} onMessage={handleOnClick} />
    </div>
  );
}

export default App;
