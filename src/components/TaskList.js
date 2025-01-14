import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={() => onDeleteTask(index)} />
      ))}
    </div>
  );
}

export default TaskList;
