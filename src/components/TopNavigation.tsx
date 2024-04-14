import React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem,Toolbar,Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const pages = ['Home', 'About', 'Categories', 'Apply']
const settings = ['Profile', 'Account', 'Logout']


function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>)=>{
    setAnchorElNav(event.currentTarget);
  }

  const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>)=>{
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseNavMenu = ()=>{
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = ()=>{
    setAnchorElUser(null)
  }
 
  return (
    <AppBar position='static' sx={{backgroundColor:"transparent", boxShadow:"none"}} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* this box is displayed when the screen is small in size */}
            <Box sx={{flexGrow:1, display:{xs:'flex', md:'none'} }}>
              <IconButton size="large" aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} sx={{color:'#fff'}} >
                <MenuIcon/>
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical:'bottom',
                  horizontal:'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical:'top',
                  horizontal:'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display:{xs:'block', md:'none'}
                }}
              >
                {pages.map((page)=>(
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* this box is displayed when the screen is large */}
            <Box sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>
              {pages.map((page)=>(
                  <Button key={page} onClick={handleCloseNavMenu} sx={{my:2, px:3, color:'#ECC051', display:'block', fontWeight:'600', fontSize:'13px', textTransform:'none'}}>
                    {page}
                  </Button>
              ))}
            </Box>

            {/* this box displays the user icon */}
            <Box sx={{flexGrow:0}}>
              <Tooltip title='Open Settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                  <Avatar alt="Abigael Kirwa" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'#ECC051', color:'#151A2E'}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt:'45px'}}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical:'top',
                  horizontal:'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical:'top',
                  horizontal:'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              {settings.map((setting)=>(
                <MenuItem key={setting}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
    </AppBar>   
  );
}
export default ResponsiveAppBar;