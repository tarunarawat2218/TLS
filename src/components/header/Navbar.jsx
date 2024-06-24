import React from 'react';
import { AppBar, Menu, MenuItem, Toolbar, Typography, Button, Drawer, IconButton, Avatar, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



const Navbar = ({ backgroundColor, color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subAnchorEl, setSubAnchorEl] = React.useState(null);
  const [subAnchorEl2, setSubAnchorEl2] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);
  const subOpen2 = Boolean(subAnchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubClick = (event) => {
    setSubAnchorEl(event.currentTarget);
  };

  const handleSubClick2 = (event) => {
    setSubAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setSubAnchorEl2(null);
  };

  const handleSubClose = () => {
    setSubAnchorEl(null);
  };

  const handleSubClose2 = () => {
    setSubAnchorEl2(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button  onClick={handleDrawerToggle}>
          <ListItemText primary="Education" />
        </ListItem>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/underGraduate" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="University Admission" />
          </ListItem>
          {/* <ListItem button component={Link} to="/postGraduate" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Postgraduate" />
          </ListItem> */}
        </List>
        <ListItem button component={Link} to="/online-certification" onClick={handleDrawerToggle}>
          <ListItemText primary="Online Certification" />
        </ListItem>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/all-courses" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Short Term Cert." />
          </ListItem>
          <ListItem button component={Link} to="/long-term-courses" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Long Term Cert." />
          </ListItem>
        </List>
        <ListItem button component={Link} to="/internship" onClick={handleDrawerToggle}>
          <ListItemText primary="Internship" />
        </ListItem>
        <ListItem button component={Link} to="/mdp-f" onClick={handleDrawerToggle}>
          <ListItemText primary="MDP/FDC" />
        </ListItem>
        <ListItem button component={Link} to="/industrial-workshop" onClick={handleDrawerToggle}>
          <ListItemText primary="Industrial Workshops" />
        </ListItem>
        <ListItem button component={Link} to="/university" onClick={handleDrawerToggle}>
          <ListItemText primary="University Partnership" />
        </ListItem>
        <ListItem button component={Link} to="/vocational-education" onClick={handleDrawerToggle}>
          <ListItemText primary="Vocational Education" />
        </ListItem>
        <ListItem button component={Link} to="/corporate-connect" onClick={handleDrawerToggle}>
          <ListItemText primary="Corporate Connect" />
        </ListItem>
        <ListItem button component={Link} to="/skilling-enterprise-solution" onClick={handleDrawerToggle}>
          <ListItemText primary="Skilling & Enterprise Solution" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor || '#003285', color: color || 'white' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>LOGO</Link>
            </Typography>
            <Avatar sx={{ bgcolor: 'white', color: '#003285' }}>T</Avatar>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>LOGO</Link>
            </Typography>
            <div>
              <Button color="inherit" onClick={handleClick}>Education</Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // fontWeight='bold'
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                
              >
                <MenuItem
                  onMouseEnter={handleSubClick}
                  onMouseLeave={handleSubClose}
                  component={Link} to="/underGraduate"
                  onClick={(event) => event.stopPropagation()}
                  

                >
                  University Admission
                  {/* <ListItemIcon>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <Menu
                    id="sub-menu"
                    anchorEl={subAnchorEl}
                    open={subOpen}
                    onClose={handleSubClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <MenuItem onClick={handleClose} component={Link} to="/underGraduate">Undergraduate</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/postGraduate">Postgraduate</MenuItem>
                  </Menu> */}
                </MenuItem>

                <MenuItem
                  onMouseEnter={handleSubClick2}
                  onMouseLeave={handleSubClose2}
                  onClick={(event) => event.stopPropagation()}
                >
                  Online Certification
                  <ListItemIcon>
                    <ArrowRightIcon fontSize="small" />
                  </ListItemIcon>
                  <Menu
                    id="sub-menu2"
                    anchorEl={subAnchorEl2}
                    open={subOpen2}
                    onClose={handleSubClose2}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <MenuItem onClick={handleClose} component={Link} to="/all-courses">Short Term Cert.</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/long-term-courses">Long Term Cert.</MenuItem>
                  </Menu>
                </MenuItem>

                <MenuItem onClick={handleClose} component={Link} to="/internship">Internship</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/mdp-f">MDP/FDC</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/industrial-workshop">Industrial Workshops</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/university">University Partnership</MenuItem>
              </Menu>
            </div>
            <Button color="inherit">Vocational Education</Button>
            <Button color="inherit">Corporate Connect</Button>
            <Button color="inherit">Skilling & Enterprise Solution</Button>
            {/* <Avatar sx={{ bgcolor: 'white', color: '#003285', ml: 2 }}>T</Avatar> */}

            <Link to="/login">
        <Button
          variant="outlined"
          sx={{
            bgcolor: 'white',
            color: '#003285',
            ml: 2,
            '&:hover': {
              bgcolor: '#003285',
              color: 'white'
            }
          }}
        >
          Login
        </Button>
      </Link>

      
      <Link to="/register">
        <Button
          variant="outlined"
          sx={{
            bgcolor: 'white',
            color: '#003285',
            ml: 2,
            '&:hover': {
              bgcolor: '#003285',
              color: 'white'
            }
          }}
        >
          Register
        </Button>
      </Link>

    

          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
