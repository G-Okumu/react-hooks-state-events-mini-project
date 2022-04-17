import { it } from "mocha";
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  // function handleButtonSelect(e) {
  //   e.preventDefault();
  //   let itemClicked = e.target.value;
  //   itemClicked !== "All" ? onSelectCategory(itemClicked) : onSelectCategory(categories)
  // }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
      {/* {categories.map((category, index) => (
        <button key={index} value={category} onClick={handleButtonSelect}>{category}</button>
      ))} */}
    </div>
  );
}

export default CategoryFilter;
