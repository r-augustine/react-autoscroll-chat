import React from "react";

const ChatItem = () => {
  const scrollMessageElem = (elem) => {
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={scrollMessageElem} style={itemStyle}>
      <div>
        <small>Username</small>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illo.
      </div>
    </div>
  );
};

const itemStyle = {
  marginBottom: "0.5em",
};

export default ChatItem;
