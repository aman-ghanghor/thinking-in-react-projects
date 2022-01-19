import React from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const List = ({ items, removeItem, editItem }) => {
  return (
      <ul className="list">
        {items.map((item) => {
          const {id, title} = item
          return (
            <li key={id} className="item"> 
               <p>{title} </p> 
               <div className="btn-container">
                 <button type="button" className="edit-btn" onClick={ ()=> editItem(id)}>
                     <AiOutlineEdit />
                 </button>
                 <button type="button" className="delete-btn" onClick={()=> removeItem(id)}>
                    <MdDeleteOutline/>
                 </button>
               </div>
            </li>
           )
        })}
      </ul>
  );
};

export default List;
