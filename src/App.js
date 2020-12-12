import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Contact from './components/Contact/Contact';
import { useStateValue } from './StateProvider';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body flex'>
            <Sidebar />
            <Feed />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
