import React from 'react';
import Contacts from './Contacts';
import './ContactList.css';

const ContactList = () => {
  return (
    <div className='contactList'>
      <Contacts
        profilePic='https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        userName='Daniel Honour'
      />
      <Contacts
        profilePic='https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        userName='John Wick'
      />
      <Contacts
        profilePic='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        userName='David Robbison'
      />
      <Contacts
        profilePic='https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        userName='Barry Doe'
      />
    </div>
  );
};

export default ContactList;
