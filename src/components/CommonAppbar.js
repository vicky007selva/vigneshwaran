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
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';

import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Project Import
import Resume from './UPDATE_RESUME_PDF.pdf'

const pages = ['Home', 'Resume', 'Experience', 'contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function CommonAppbar() {

  const Navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const handleNavigation = (page) => {
       console.log(`/${page}`)
       let page1 = page
       if(page === 'Home')
       {
        page1= ''
       }
       Navigate(`/${page1}`)
        
  }

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MYSITE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#114c5d"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() =>handleNavigation(page)}
                  >
                    {page === 'Resume' &&
                      <Link
                        style={{textDecoration: 'none',color:"inherit"}}
                        to={Resume}
                        download="Resume-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Typography color="inherit" style={{ borderRight: '0.1em solid black', padding: '0.5em' }}
                          textAlign="center">{page}</Typography>
                      </Link>
                    }
                    {page !== 'Resume' &&
                      <Typography color="inherit" style={{ borderRight: '0.1em solid black', padding: '0.5em' }}
                        textAlign="center">{page}</Typography>
                    }

                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              MYSITE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <>

                  {page === 'Resume' &&
                    <Link
                      style={{textDecoration: 'none'}}
                      to={Resume}
                      download="Resume-PDF-document"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >

                        {page}
                      </Button>
                    </Link>
                  }
                  {page !== 'Resume' &&
                    <Button
                      key={page}
                      onClick={()=>handleNavigation(page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >

                      {page}
                    </Button>
                  }

                  <Divider orientation="vertical" variant="middle" flexItem></Divider>
                </>
              ))}
            </Box >

            {/* <Box sx={{ flexGrow: 0 }}>
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
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>

  );
}
export default CommonAppbar;
