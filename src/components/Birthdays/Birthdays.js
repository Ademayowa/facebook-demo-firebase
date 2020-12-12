import React from 'react';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import './Birthdays.css';

const Birthdays = () => {
  return (
    <div className='birthdays'>
      <div className='birthdays__content'>
        <h4>Birthdays</h4>
        <CardGiftcardIcon className='birthdays__icon' />
        <h5>Sureking's birthday is today.</h5>
        <hr />
      </div>
    </div>
  );
};

export default Birthdays;
