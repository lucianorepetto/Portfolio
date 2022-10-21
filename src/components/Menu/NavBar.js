import React from 'react'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarListItems';
import {useNavigate} from 'react-router-dom'
import MainAppBar from './Menu';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Navbar() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({right: false});


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  

  const list = (anchor) => {
    return <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >      
      <div style={{display: 'flex',margin: '10px 20px',alignItems: 'center',justifyContent: 'center'}}>
        <Avatar 
        sx={{marginRight: '10px',width: '50px', height: '50px'}}
        src="https://lh3.googleusercontent.com/ogw/ADea4I5QLGaH8g4hK6IAnKAPv7FNwA64Gw_vcWhbmmnze04=s300" 
        />
        <div style={{display: 'grid'}}>
          <span style={{fontWeight: 'bold'}}>Luciano Repetto</span>
          <span style={{fontSize: '13px'}}>Full Stack Developer</span>
        </div>
      </div>
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem key={item} 
          onClick={()=> navigate(item.route)}
          disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  }

  const anchor = 'right'
  return (
    <React.Fragment key={anchor}>
      <MainAppBar toggleDrawer={toggleDrawer}/> 
      <SwipeableDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#0a1929',
            color: 'white'
          },
        }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Navbar