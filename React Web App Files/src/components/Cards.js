import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>System Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/22.jpg'
              text='Automatic Data Logging'
              label='Automation'
              path='/monitor'
            />
            <CardItem
              src='images/23.jpg'
              text='Real-Time Readings'
              label='Automation'
              path='/monitor'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/21.jpg'
              text='Easy to use Interface'
              label='User Oriented'
              path='/user-manual'
            />
            <CardItem
              src='images/20.jpg'
              text='System Generated Alerts'
              label='IOT'
              path='/maintenance-manual'
            />
            <CardItem
              src='images/19.jpg'
              text='System Generated Informatics'
              label='Automation'
              path='/monitor'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;  