import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";

const App = () => {
  const [categories, setCategories] = useState(["all"]);
  const [menu, setMenu] = useState(data);

  useEffect(() => {
    uniqueCategories() ;
  }, []);

  const uniqueCategories = () => {
    let newCategories = ["all"];
    data.forEach((item) => {
      if (!newCategories.includes(item.category)) {
        newCategories.push(item.category);
      }
    })
    setCategories(newCategories) ;
  }

  const filterMenu = (filterCategory) => {
     const newMenu = data.filter( (item)=>{
        if(filterCategory==="all"){
          return data ;
        }
        return item.category===filterCategory
     })
     console.log(newMenu) ;
     setMenu(newMenu) ;
  }

  return (
    <main>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterMenu={filterMenu} />
      <Menu menu={menu} />
    </main>
  );
};

export default App;
