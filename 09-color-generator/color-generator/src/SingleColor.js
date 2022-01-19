import React, {useState, useEffect} from "react" ;

const SingleColor = ( props ) => {
    const [alert, setAlert] = useState(false) ;

    const {rgb, alpha, type, weight} = props.color ;
    const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` ;  

    useEffect(()=>{
       const timeout = setTimeout( ()=>{
          setAlert(false) 
       }, 5000) ;
       // cleanup function will be called when next useEffect call (when alert changes)
       return ()=> clearTimeout(timeout) 
    }, [alert])

    const handleCopy = () => {
       navigator.clipboard.writeText(color) ;
       setAlert(true) ;
    }

    const colorStyle = {
      backgroundColor: color
    }
   return (
      <div className="single-color" style={colorStyle} onClick={handleCopy} >
         <span> {weight}% </span>
         <span className="copy-span"> {alert ? "Color copied" : null}  </span>
      </div>
   )

} 

export default SingleColor ;


