import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import PersonIcon from '@material-ui/icons/Person';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../StateProvider';

import db from '../../firebase';
import firebase from 'firebase';
import './Messenger.css';

const Messenger = () => {
  const [{ user }] = useStateValue();

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // send typed msg to db
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    });

    setInput('');
  };

  return (
    <div className='messenger'>
      <div className='messenger__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className='messenger__input'
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <button onClick={handleSubmit} type='submit'>
            hide button
          </button>
        </form>
      </div>
      <hr />

      <div className='messenger__bottom'>
        <div className='messenger__option'>
          <PhotoIcon style={{ color: '#41B35D' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messenger__option'>
          <PersonIcon style={{ color: '#1771E6' }} />
          <h3>Tag Friends</h3>
        </div>
        <div className='messenger__option messenger__optionHide'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
