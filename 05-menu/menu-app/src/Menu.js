import React from "react";

const Menu = ({ menu }) => {
  return (
    <section className="menu">
      {menu.map((item) => {
        return (
          <div key={item.id} className="item">
            <div className="item-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-content">
              <div className="title">
                <h4>{item.title}</h4>
                <span className="price">${item.price}</span>
              </div>
              <div className="desc">
                <p> {item.desc} </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
