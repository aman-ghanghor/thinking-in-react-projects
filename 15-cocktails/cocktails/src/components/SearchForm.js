import React, {useEffect} from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  
  // handle submit is used to prevent the page refresh whenever user Enter in input field
  const handleSubmit = (e) => {
    e.preventDefault() ;
    setSearchTerm(searchValue.current.value);
  }

  const searchCocktail = () => {
     setSearchTerm(searchValue.current.value);
  }

  useEffect(() => {
    searchValue.current.focus() ;
  }, []);

  

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit} > 
        <div className="form-control">
          <label htmlFor="name"> search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
