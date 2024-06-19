import * as React from 'react';
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

const pages = ['Education', 'Vocational Education', 'Corporate', 'Skilling & Enterprise'];
const educationSubmenu = ['Admission', 'Certifications', 'Internship', 'MDP/FDP', 'Industrial Workshop', 'University'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElEducation, setAnchorElEducation] = React.useState(null);

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
    <AppBar position="sticky" sx={{ backgroundColor: 'black', boxShadow: 'none', width: '100rem' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 0 } }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
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
                display: { xs: 'flex', md: 'none' },
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
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
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
                <MenuItem key={item} onClick={handleCloseEducationMenu}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
            {pages.slice(1).map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

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
    </AppBar>
  );
}

export default Navbar;
