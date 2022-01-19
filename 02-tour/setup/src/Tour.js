import React, { useState } from 'react';

const Tour = ( {id, image, info, price, name, removeTour} ) => {
  const [readMore, setReadMore] = useState(false) ;

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h2>{name}</h2>
        <h2 className="tour-price">${price}</h2>
      </div>
      <p>
        {readMore ? info : info.substring(0, 200)}
        <button className='btn' onClick={ ()=> setReadMore(!readMore) }>
          {readMore ? "Show less" : "Read more"}
        </button>
      </p>
      <button className='delete-btn' onClick={ () => removeTour(id) } >Not Interested</button>
    </footer >
  </article>
};

export default Tour;
