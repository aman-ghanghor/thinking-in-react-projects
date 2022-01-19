import React, { useState, useEffect  } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(1);

  const [text, setText] = useState(data);

  useEffect(() => {
     setText(data.slice(0, 1)) ;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0) {
       amount = 1 ;
    }
    if(amount > data.length  ) {
       amount = data.length ;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section">
      <div className="title">
        <h2> Tired of Boring lorem ipsum</h2>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraph</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="generate-btn" type="submit">
          Generate
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}> {item} </p>;
        })}
      </article>
    </section>
  );
}

export default App;
