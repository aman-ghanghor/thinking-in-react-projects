import React, { useState, useEffect } from "react";
import data from "./data.js";
import "./index.css";

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  // useEffect for index changes
  useEffect(() => {
    if(index < 0){
      setIndex(people.length - 1) ;
    }
    if(index > people.length - 1) {
       setIndex(0) ;
    }
  }, [index]);
  
  // useEffect for autoSliding --- its also returning cleanup function to prevent any mess up
  useEffect( ()=>{
    const slider = setInterval( ()=>{
      setIndex(index + 1) ;
    }, 10000)
    return ()=>{ clearInterval(slider) }
  })

  return (
    <section>
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (index == personIndex) {
            position = "active-slide";
          }
          if (
            (index == 0 && personIndex == people.length - 1) ||
            (index != 0 && personIndex == index - 1)
          ) {
            position = "last-slide";
          }
          if (
            (index == people.length - 1 && personIndex == 0) ||
            (index != people.length - 1 && personIndex == index + 1)
          ) {
            position = "next-slide";
          }
          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt="" />
              <h3>{name}</h3>
              <span className="job-title">
                {title} {personIndex}{" "}
              </span>
              <p>{quote}</p>
            </article>
          );
        })}

        <div className="btn-container">
          <button className="prev-btn" onClick={ ()=> setIndex(index - 1)}>
            Previous
          </button>
          <button className="next-btn" onClick={ ()=> setIndex(index + 1)}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
