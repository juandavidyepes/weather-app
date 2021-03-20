import React from 'react';
import './PlaceVisit.scss';
import Card from './Card/Card';

function PlaceVisit() {
  return (
    <div className='placeVisit'>
      <h1 className='title'>
        Place to <span>Visit</span>
      </h1>
      <Card />
      <section className='reviews'> + top Reviews</section>
      <Card />
    </div>
  );
}

export default PlaceVisit;
