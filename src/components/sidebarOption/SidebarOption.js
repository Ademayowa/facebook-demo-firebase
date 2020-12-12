import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './SidebarOption.css';

const SidebarOption = ({ user, src, title, Icon }) => {
  return (
    <div className='sidebarOption'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h5>{title}</h5>
    </div>
  );
};

export default SidebarOption;
