import React from "react";

function CategoryFilter({categories,selectedCategory,setSelectedCategory}) {

  const categoryButtons = categories.map((category)=>{
    const className = category === selectedCategory ? "selected" : null
    return (
    <button key={category} className={className} onClick={() => setSelectedCategory(category)}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
