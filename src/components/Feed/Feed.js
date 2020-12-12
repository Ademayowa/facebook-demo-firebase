import React, { useEffect, useState } from 'react';
import CardList from '../CardList.js/CardList';
import Messenger from '../Messenger/Messenger';
import Post from '../Post/Post';
import db from '../../firebase';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <>
      <div className='feed'>
        <CardList />
        <Messenger />

        {posts.map((post) => (
          <Post
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
