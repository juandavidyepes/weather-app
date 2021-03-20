import React from 'react';
import './NewCity.scss';

function NewCity() {
  return (
    <div className='newCity'>
      <button className='btn'>Add Locations</button>
      <img src='./assets/add-city.svg' alt='City' />
    </div>
  );
}

export default NewCity;
