import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks,setTasks]=useState(TASKS)
  const [selectedCategory,setSelectedCategory]=useState("All")

  function handleDeleteTask(text){ 
    console.log("text filter",tasks.filter(task=> task.text !== text))
    setTasks(tasks.filter(task=> task.text !== text));
}

function addNewTask(task){
  setTasks([...tasks,task]) 

}

const visibleTasks = tasks.filter(
  (task) => selectedCategory === "All" || task.category === selectedCategory
);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} selectedCategory={selectedCategory} addNewTask={addNewTask}/>
      <TaskList tasks={visibleTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
