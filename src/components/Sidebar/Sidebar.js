import React from 'react';
import PolicyIcon from '@material-ui/icons/Policy';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserICircleIcon from '@material-ui/icons/SupervisedUserCircle';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AssistantIcon from '@material-ui/icons/Assistant';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from '../sidebarOption/SidebarOption';
import { useStateValue } from '../../StateProvider';
import './Sidebar.css';

const Sidebar = () => {
  const [{ user }] = useStateValue();

  return (
    <>
      <div className='sidebar'>
        <SidebarOption src={user.photoURL} title={user.displayName} />
        <SidebarOption Icon={PolicyIcon} title='COVID-19 Information Center' />
        <SidebarOption Icon={PeopleIcon} title='Friends' />
        <SidebarOption Icon={SupervisedUserICircleIcon} title='Groups' />
        <SidebarOption Icon={OndemandVideoIcon} title='Videos' />
        <SidebarOption Icon={AssistantIcon} title='Events' />
        <SidebarOption Icon={RestoreIcon} title='Memories' />
        <SidebarOption Icon={BookmarkIcon} title='Saved' />
        <SidebarOption Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarOption Icon={ExpandMoreIcon} title='See More' />
      </div>
    </>
  );
};

export default Sidebar;
