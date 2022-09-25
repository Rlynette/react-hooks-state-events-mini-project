import React from "react";

function Task({text,category,deleteItem}) {
  return (
    <div className="task">
      <div className="cat">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deleteItem(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
