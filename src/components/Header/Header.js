import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserICircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExplicitIcon from '@material-ui/icons/Explicit';
import { useStateValue } from '../../StateProvider';
import './Header.css';

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png'
          alt='logo'
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__icon header__icon--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__icon header--mobileHiden'>
          <OndemandVideoIcon fontSize='large' />
        </div>
        <div className='header__icon header--mobileHiden'>
          <SupervisedUserICircleIcon fontSize='large' />
        </div>
        <div className='header__icon header--mobileHiden'>
          <ExplicitIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__userInfo'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton className='header__hide'>
          <AddIcon
            style={{ borderRadius: '40px', backgroundColor: '#D8DADF' }}
          />
        </IconButton>
        <IconButton className='header__hide'>
          <ForumIcon
            style={{ borderRadius: '40px', backgroundColor: '#D8DADF' }}
          />
        </IconButton>
        <IconButton className='header__hide'>
          <NotificationsActiveIcon
            style={{ borderRadius: '40px', backgroundColor: '#D8DADF' }}
          />
        </IconButton>
        <IconButton className='header__hide'>
          <ExpandMoreIcon
            style={{ borderRadius: '40px', backgroundColor: '#D8DADF' }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
