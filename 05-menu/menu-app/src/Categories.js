import React from "react";

const Categories = ({ categories, filterMenu }) => {
  return (
    <section className="categories">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <button onClick={() => filterMenu(category)} >{category}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
