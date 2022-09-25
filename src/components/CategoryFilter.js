import React from "react";

function CategoryFilter({onBtn,selectedButton,categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=>(
        <button
         className={onBtn===category?'selected':''}
         key={index}
         onClick={()=>{selectedButton(category)}}
         
         >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
