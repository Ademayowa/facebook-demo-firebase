import React from 'react';
import { auth, provider } from '../../firebase';
import { Button } from '@material-ui/core';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

import './Login.css';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__left'>
        <div className='login__logo'>
          <img
            src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
            alt='logo'
          />
        </div>

        <div className='login__text'>
          <h2>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </h2>
        </div>
      </div>

      <div className='login__right'>
        <div className='login__card'>
          <div className='login__rightText'>
            <h4>Login into your facebook using any of your Google account.</h4>
          </div>
          <Button type='submit' onClick={signIn}>
            Log In
          </Button>

          <div className='login__bottom'>
            <p>Create a Page for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
