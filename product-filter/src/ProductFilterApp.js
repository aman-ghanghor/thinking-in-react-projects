import React, { Component } from "react";
import "./ProductFilterApp.css";

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <fieldset>
          <label htmlFor="search">What are you looking for ?</label>
          <input id="search" type="text" value={this.props.filterText} onChange={this.props.handleFilterText} />
        </fieldset>
        <fieldset>
          <input type="checkbox" id="inStock" checked={this.props.isStockOnly} onChange={this.props.handleIsStockOnly}/>
          <label htmlFor="inStock">Only show product in stock</label>
        </fieldset>
      </div>
    );
  }
}

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr className="product-category-row">
        <td> <strong> {this.props.category}</strong> </td>
      </tr>
    );
  }
}
class ProductRow extends Component {
  render() {
    return (
      <tr className="product-row">
        <td> {this.props.name} </td>
        <td> {this.props.price} </td>
      </tr>
    );
  }
}
class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText.trim().toLowerCase() ;
    const isStockOnly = this.props.isStockOnly ;
    const products = this.props.products ;

    let p_cats = [];
    let my_products = [];
    products.forEach((product) => {
      if (!p_cats.includes(product.category)) {
        p_cats.push(product.category);
      }
    });

    p_cats.forEach((cat) => {
      let product_category_row = (
        <ProductCategoryRow key={cat} category={cat} />
      );
      my_products.push(product_category_row);
      products.forEach((product, index) => {
        let category_match = cat===product.category ;
        let filter_match = filterText==="" ? true : product.name.toLowerCase().startsWith(filterText) ;
        let stock_match = isStockOnly ? product.stocked : true ;
  
        if ( category_match && filter_match && stock_match ) {
          let product_row = (
            <ProductRow key={index} name={product.name} price={product.price} />
          );
          my_products.push(product_row);
        }
      });
    });
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Price</strong></th>
          </tr>
        </thead>
        <tbody>{my_products}</tbody>
      </table>
    );
  }
}

class ProductFilterApp extends Component {
  state = {
    filterText: "",
    isStockOnly: false 
  }
  handleFilterText = (e)=> {
    let value = e.target.value ;
    this.setState(
      {filterText: value}
    )
  }
  handleIsStockOnly = (e)=> {
    let value = e.target.checked ;
    this.setState (
      {isStockOnly: value}
    )
  }
  render() {
    return (
      <div className="product-filter-app">
        <Searchbar filterText={this.state.filterText} 
                   isStockOnly={this.state.isStockOnly} 
                   handleFilterText={this.handleFilterText} 
                   handleIsStockOnly={this.handleIsStockOnly} />
        <ProductTable filterText={this.state.filterText} 
                   isStockOnly={this.state.isStockOnly}
                   products={this.props.products} />
      </div>
    );
  }
}

export default ProductFilterApp;
