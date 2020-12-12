import React from 'react';
import { Avatar } from '@material-ui/core';
import './Card.css';

const Card = ({ image, profilePic, text }) => {
  return (
    <>
      <div className='card' style={{ backgroundImage: `url(${image})` }}>
        <Avatar className='card__avatar' src={profilePic} />
        <h4>{text}</h4>
      </div>
    </>
  );
};

export default Card;
