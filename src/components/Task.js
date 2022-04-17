import React from "react";

function Task({name, category, deleteTask}) {
  function handleDelete(){
    deleteTask(name);
  }
  return (
    <div className="task">
      <div className="label">{name}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
