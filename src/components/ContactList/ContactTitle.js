import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ContactTitle = () => {
  return (
    <>
      <div className='contacts__content'>
        <h3 className='contacts__title'>Contacts</h3>
        <div className='contacts__icon'>
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
    </>
  );
};

export default ContactTitle;
