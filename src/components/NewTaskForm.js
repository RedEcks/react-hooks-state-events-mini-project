import React, {useState} from "react";

function NewTaskForm({categories,selectedCategory,addNewTask}) {

  const [categoryOptions,setcategoryOptions]=useState("Code")
  const [inputValue,setInputValue]=useState("")

  const optionButtons = categories.map((category)=>{
    return (
    <option key={category}>{category}</option>)
  })

  function handleSelectOnChange(event){
    setcategoryOptions(event.target.value)
    console.log("handleSelectOnChange", categoryOptions)
  }

  function handleInputChange(event){
    setInputValue(event.target.value)
    console.log("handleInputChange", inputValue)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newObject= {
      text: inputValue,
      category: categoryOptions
    }
    addNewTask(newObject)

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={categoryOptions} onChange={handleSelectOnChange}>
          {optionButtons}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
