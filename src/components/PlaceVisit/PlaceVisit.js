import React from 'react';
import './PlaceVisit.scss';
import Card from './Card/Card';

function PlaceVisit() {
  //Array for Card's props

  let cards = [
    {
      id: 0,
      size: 'large',
      image:
        'https://images.unsplash.com/photo-1582483755595-8bfccb0b4a37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=603&q=80',
      place: 'Arab Street',
      city: 'Singapore',
    },
    {
      id: 1,
      size: 'small',
      image:
        'https://images.unsplash.com/photo-1598122132306-8608c6ca6c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1985&q=80',
      place: 'Museum of Baechle',
      city: '',
    },
    {
      id: 2,
      size: 'medium',
      image:
        'https://images.unsplash.com/photo-1495874544969-f7bb3b4f52f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      place: 'Fountain of Zawila',
      city: '',
    },
  ];

  return (
    <div className='placeVisit'>
      <h1 className='title'>
        Place to <span>Visit</span>
      </h1>
      <section className='reviews'>
        <h6>+ Top Reviews</h6>
        <div className='icons'>
          <img
            src='https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80'
            alt=''
            className='miniIcon'
          />
          <img
            src='https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt=''
            className='miniIcon'
          />
          <img
            src='https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt=''
            className='miniIcon'
          />
          <button className='miniIcon btn'>8+</button>
        </div>
      </section>
      <div className='secondaryCards'>
        {cards.map((element) => {
          return <Card key={element.id} {...element} />;
        })}
      </div>
    </div>
  );
}

export default PlaceVisit;
