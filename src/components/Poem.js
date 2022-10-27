import React, {useState} from "react";

function Poem({poem1}) {
  const [read, setRead] = useState(false)

function handleRead(){
  setRead((read)=> !read)
}
  return (
    <div>
      <h3>{poem1.title}</h3>
      <p>{poem1.content}</p>
      <p>
        <strong>-{poem1.author}</strong>
      </p>
      <button onClick={handleRead}>{read ? "Mark as read" : "Mark as unread"}</button>
      {/* need an on click to change the button */}
    </div>
  );
}

export default Poem;
