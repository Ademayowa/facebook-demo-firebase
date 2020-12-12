import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import './Post.css';

const Post = ({ profilePic, username, timestamp, message }) => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar className='post__avatar' src={profilePic} />

        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className='post__option'>
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>

        <div className='post__option'>
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
