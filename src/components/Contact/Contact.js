import React from 'react';
import Birthdays from '../Birthdays/Birthdays';
import ContactList from '../ContactList/ContactList';
import ContactTitle from '../ContactList/ContactTitle';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <Birthdays />
        <ContactTitle />
        <ContactList />
      </div>
    </>
  );
};

export default Contact;
