import React from "react";
import ChatItem from "./ChatItem";

const Chat = ({ messages, onMessage }) => {
  return (
    <div style={styles}>
      <div className='messages' style={messagesStyle}>
        {messages && messages.map((v, i) => <ChatItem key={i} />)}
      </div>
      <button onClick={onMessage} style={btnStyle}>
        add message
      </button>
    </div>
  );
};

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "200px",
  margin: "0 auto",
  height: "400px",
  border: "1px solid black",
};

const messagesStyle = {
  overflow: "scroll",
  height: "390px",
  padding: "0.2em",
};

const btnStyle = {
  display: "block",
  borderRadius: "0",
  border: "none",
  height: "30px",
};

export default Chat;
