import React from 'react';
import { Avatar } from '@material-ui/core';
import './Contacts.css';

const Contacts = ({ profilePic, userName }) => {
  return (
    <>
      <div className='contacts'>
        <div className='contacts__userDetails'>
          <Avatar src={profilePic} />
          <h4>{userName}</h4>
        </div>
      </div>
    </>
  );
};

export default Contacts;
