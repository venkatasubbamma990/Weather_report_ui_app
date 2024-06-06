import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Typography , 
    useMediaQuery, useTheme 
} from '@mui/material';

import { Avatar } from '@mui/material';
import weatherIcon from '../Components/images/report.png'
import {  Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktopSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktopLarge = useMediaQuery(theme.breakpoints.up("lg"));


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const navItems = [
    {
        text: 'Dashboard',
        icon: <DashboardIcon />,
        href: '/',
      },
      {
        text: 'Report',
        icon: <AssessmentIcon />,
        href: '/',
      },
      {
        text: 'Settings',
        icon: <SettingsSuggestIcon />,
        href: '/',
      },
      {
        text: 'Calender',
        icon: <SettingsSuggestIcon />,
        href: '/Calender',
      },
  
  
    
  ]

  const drawer = (
   
    <div >
      {/* <Toolbar /> */}
      {/* <Divider /> */}
      
        <Box sx={{display:"flex"  , justifyContent : "center" , my:2 ,  }}>
        <Avatar src={weatherIcon} sx={{ width: 56, height: 56 , color:"red" ,  }} />
      <Typography variant="h6" sx={{my:2 , px:2 ,   color : (isMobile || isTablet)? "black" : "white"}} >
        Platform
      </Typography>
        </Box>
     
      <List>
      {navItems.map((nav, index) => (
        <ListItem key={nav.text} disablePadding>
          <ListItemButton component={Link} to={nav.href} >
            <ListItemIcon sx={{color : (isMobile|| isTablet)? "black" : "white"}}>
               {nav.icon}
            </ListItemIcon>
            <ListItemText primary={nav.text} sx={{color : (isMobile || isTablet)? "black" : "white"}} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
   
      {/* <Divider /> */}
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'blueviolet'
      }}
    >
      {
        (isMobile || isTablet) && (
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { color: 'white' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" noWrap component="div" sx={{ color: 'White' }}>
            Platform
            </Typography>
          </Toolbar>
        )
      }
    </AppBar>
    <Box
      component="nav"
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          bgcolor: 'blueviolet'
        }}
      >
        {drawer}
      </Drawer>
      {
        (isDesktopSmall || isDesktopLarge) && (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: isDesktopSmall ? "150px" : drawerWidth, bgcolor: 'blueviolet' },
            }}
            open
          >
            {drawer}
          </Drawer>
        )
      }
    </Box>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
    </Box>
  </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Navbar;
