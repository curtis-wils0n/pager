import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import '../styles/navbar.css';


export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <>
      <header className="header">
        <h1 className="title">
          <a href='/'>pager</a>
        </h1>
        <nav>
          <div className="topnav">
            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Ryan Magee</Typography>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={ handleClick }
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={ open ? 'account-menu' : undefined }
                    aria-haspopup="true"
                    aria-expanded={ open ? 'true' : undefined }
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 5,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Avatar /> <Link to='user'>My Profile</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Avatar /> <Link to='user/shelf'>My Shelf</Link>
                </MenuItem>
                <MenuItem>
                  <Avatar /> <Link to='user/reviews'>My Reviews</Link>
                </MenuItem>
                <MenuItem>
                  <Avatar /> <Link to='user/lists'>My Lists</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Avatar /> <Link to='/'>Logout</Link>
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </nav>
      </header>

    </>
  );
}

