import React, { useState, useEffect } from 'react';
import './Card.scss';

function Card(props) {
  const { id, size, image, place, city } = props;

  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    if (id === 2) {
      setIsLast(true);
    }
  }, []);

  return (
    <div
      className={size + ' card'}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className='info'>
        <i className='fas fa-map-marker-alt fa-xs'></i>
        <section className='infoTitles'>
          <h6 className='placeTitle'>{place}</h6>
          <h6 className='cityTitle'>{city}</h6>
        </section>
      </div>

      {isLast && <button className='addBtn'>+</button>}
    </div>
  );
}

export default Card;
