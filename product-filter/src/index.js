import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProductFilterApp from "./ProductFilterApp";


let products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  
  { category: "Sporting Goods", price: "$49.99", stocked: false, name: "Handball" },
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Chess" },
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Ice Hokey" },
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Cricket Ball" },
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Volleyball" },

  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },

  { category: "Electronics", price: "$99.99", stocked: true, name: "Samsung Galaxy" },
  { category: "Electronics", price: "$99.99", stocked: false, name: "Vostro 3590" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iMac" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "Nokia Mobile" },

  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }
];


ReactDOM.render(<ProductFilterApp products={products} />,
                document.getElementById("root"));