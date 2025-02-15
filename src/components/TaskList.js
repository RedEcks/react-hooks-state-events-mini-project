import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteTask}) {
  const taskList=tasks.map((task)=>(
    <Task text={task.text} category={task.category} key={task.text} handleDeleteTask={handleDeleteTask}/>
  ))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
