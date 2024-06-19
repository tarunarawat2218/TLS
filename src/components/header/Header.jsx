// src/ResponsiveAppBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const pages = ['Education', 'Vocational Education', 'Corporate Connect', 'Skilling & Enterprise Solution'];
const educationSubmenu = ['Admission', 'Online Certifications', 'Internship', 'MDP/FDP', 'Industrial Workshop', 'University Partnerships'];
const admissionSubmenu = ['Undergraduate', 'Post Graduate'];
const certificationSubmenu = ['Short Term Certificate', 'Long Term Certificate'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElEducation, setAnchorElEducation] = React.useState(null);
  const [anchorElAdmission, setAnchorElAdmission] = React.useState(null);
  const [anchorElCertification, setAnchorElCertification] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenEducationMenu = (event) => {
    setAnchorElEducation(event.currentTarget);
  };

  const handleCloseEducationMenu = () => {
    setAnchorElEducation(null);
  };

  const handleOpenAdmissionMenu = (event) => {
    setAnchorElAdmission(event.currentTarget);
  };

  const handleCloseAdmissionMenu = () => {
    setAnchorElAdmission(null);
  };

  const handleOpenCertificationMenu = (event) => {
    setAnchorElCertification(event.currentTarget);
  };

  const handleCloseCertificationMenu = () => {
    setAnchorElCertification(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseUserMenu();
    handleCloseEducationMenu();
    handleCloseAdmissionMenu();
    handleCloseCertificationMenu();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontFamily: "'Noto Serif', serif", fontWeight: '2rem' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem button key={page}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', backgroundColor: '#333f59', minHeight: '90vh', color: 'white', overflowX: 'hidden' }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 0 } }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                ml: 40,
                display: { xs: 'none', md: 'flex' },
                fontFamily: '',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'capitalize',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                ml: 20,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'capitalize',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, ml: 70, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
              <Button
                onClick={handleOpenEducationMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
              >
                Education
              </Button>
              <Menu
                id="education-menu"
                anchorEl={anchorElEducation}
                open={Boolean(anchorElEducation)}
                onClose={handleCloseEducationMenu}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              >
                {educationSubmenu.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      if (item === 'Admission') handleOpenAdmissionMenu;
                      else if (item === 'Online Certifications') handleOpenCertificationMenu;
                      else handleNavigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
                    }}
                  >
                    {item}
                    {item === 'Admission' && (
                      <Menu
                        id="admission-submenu"
                        anchorEl={anchorElAdmission}
                        open={Boolean(anchorElAdmission)}
                        onClose={handleCloseAdmissionMenu}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        {admissionSubmenu.map((subitem) => (
                          <MenuItem key={subitem} onClick={() => handleNavigate(`/admission/${subitem.toLowerCase().replace(/\s+/g, '-')}`)}>
                            {subitem}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                    {item === 'Online Certifications' && (
                      <Menu
                        id="certification-submenu"
                        anchorEl={anchorElCertification}
                        open={Boolean(anchorElCertification)}
                        onClose={handleCloseCertificationMenu}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        {certificationSubmenu.map((subitem) => (
                          <MenuItem key={subitem} onClick={() => handleNavigate(`/certification/${subitem.toLowerCase().replace(/\s+/g, '-')}`)}>
                            {subitem}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                onClick={() => handleNavigate('/vocational-education')}
              >
                Vocational Education
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                onClick={() => handleNavigate('/corporate-connect')}
              >
                Corporate Connect
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                onClick={() => handleNavigate('/skilling-enterprise-solution')}
              >
                Skilling & Enterprise Solution
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: { xs: 1, md: 0 }, mr: { xs: 0, md: 10 } }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleNavigate(`/${setting.toLowerCase()}`)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
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
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 8 }}>
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 3 } }}>
            <Typography variant="h3" component="h1" sx={{ mt: { xs: 2, md: 22 }, ml: { xs: 2, md: 22 } }}>
              Benefit From Our Online Learning Expertise
            </Typography>
            <Typography variant="h6" component="h2" sx={{ mb: 4, mt: { xs: 2, md: 5 }, ml: { xs: 2, md: 22 } }}>
              Earn professional certifications and boost your career.
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4, ml: { xs: 2, md: 22 } }}>
              Lorem ipsum dolor sit amet, consectetur aliqua adipiscing elit, sed do eiumod tempor.
            </Typography>
            <Button variant="contained" sx={{ ml: { xs: 2, md: 22 } }}>Explore Courses</Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-mid' } }}>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2021/09/07/20/28/woman-6604888_640.png" // replace with your image URL
              alt="Online Learning"
              sx={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;
