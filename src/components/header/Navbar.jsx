import React from 'react';
import { AppBar, Menu, MenuItem, Toolbar, Typography, Button, ListItemIcon } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subAnchorEl, setSubAnchorEl] = React.useState(null);
  const [subAnchorEl2, setSubAnchorEl2] = React.useState(null);

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

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333f59' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <div>
          <Button color="inherit" onClick={handleClick}>Education</Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onMouseEnter={handleSubClick}
              onMouseLeave={handleSubClose}
              onClick={(event) => event.stopPropagation()}
            >
              Admission
              <ListItemIcon>
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
              </Menu>
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

            <MenuItem onClick={handleClose} component={Link} to="/internship" >Internship</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/mdp-f">MDP/FDC</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/industrial-workshop">Industrial Workshops</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/university" >University Partnership</MenuItem>
          </Menu>
        </div>
        <Button color="inherit">Vocational Education </Button>
        <Button color="inherit">Corporate Connect</Button>
        <Button color="inherit">Skilling & Enterprise Solution</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
