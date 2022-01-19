import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";



const getLocalStorage = () => {
   let list = localStorage.getItem("list") ;
   if(list) {
     return JSON.parse(localStorage.getItem("list")) ;
   }
   else {
     return [] ;
   }
}


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // when name is ''
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null) ;
      setName("") ;
      setIsEditing(false) ;
      showAlert(true, "success", "value changed") ;
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "danger", "empty list");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specifiedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specifiedItem.title);
  };

  useEffect( ()=>{
    localStorage.setItem("list", JSON.stringify(list)) ;
  }, [list])

  return (
    <section className="section">
      <div className="title">
        <h3> Grocery Bud </h3>
      </div>
      <div className="grocery">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="e.g. Eggs"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </form>
        {list.length > 0 && (
          <div className="list-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              Clear items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
