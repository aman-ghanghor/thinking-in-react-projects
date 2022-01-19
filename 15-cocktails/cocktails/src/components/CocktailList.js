import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h1 className="section-title">no cocktail match your search criteria</h1>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">
        cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map( (item)=> {
           return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}

export default CocktailList;
