import React, {useState} from "react" ;
import SingleColor from "./SingleColor";

import Values from "values.js" ;

function App() {
  const [color, setColor] = useState("") ;
  const [error, setError] = useState(false) ;
  const [list, setList] = useState( (new Values("#fc6203")).all(10) ) ;
  
  const handleSubmit = (e) => {
     e.preventDefault() ;
     try {
       const colors = (new Values(color)).all(10) ;
       setList(colors) ;
       setError(false) ;
     }
     catch (error){
       setError(true) ;
     }
  }

  
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Color Generator</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Enter color value</label>
          <input className={error ? "input-error": null} type="text" id="color" placeholder="#fc6203" onChange={ (e)=> setColor(e.target.value) }
             />
          <button type="submit">Generate</button>
        </form>
      </section>
      <section className="section color-container" > 
         {list.map( (color, index) => {
           return <SingleColor key={index} color={color} />
         })}
      </section>

    </>
  );
}

export default App;
