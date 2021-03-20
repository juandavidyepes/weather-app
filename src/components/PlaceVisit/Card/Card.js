import React from 'react';
import './Card.scss';

function Card() {
  return (
    <div className='card'>
      <i className='fas fa-map-marker-alt fa-xs'></i>
      <section className='info'>
        <h6 className='placeTitle'>Arab Street</h6>
        <h6 className='cityTitle'>Singapore</h6>
      </section>
    </div>
  );
}

export default Card;
