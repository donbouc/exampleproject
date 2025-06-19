import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  useTheme, 
  IconButton, 
  Menu, 
  MenuItem 
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={1} 
      sx={{ 
        backgroundColor: '#e0e0e0', // Darker gray background
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <Box flexGrow={1} display="flex" alignItems="center">
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Box 
                component="img" 
                src="/logo192.png" 
                alt="Logo" 
                sx={{ 
                  height: 40, 
                  marginRight: theme.spacing(2),
                  display: { xs: 'none', sm: 'block' }
                }}
              />              <Typography variant="h6" component="div" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                React SPA
              </Typography>
            </Link>
          </Box>          {/* Navigation - Account Circle Icon with Dropdown */}
          <Box>
            <IconButton
              onClick={handleMenuOpen}
              size="large"
              edge="end"
              aria-label="account navigation"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              color="default"
              sx={{ 
                ml: 2,
                '&:hover': { 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)' 
                } 
              }}
            >
              <AccountCircleIcon 
                sx={{ 
                  width: 32, 
                  height: 32, 
                  color: theme.palette.text.primary 
                }} 
              />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'account-button',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>              <MenuItem onClick={() => handleNavigation('/about')}>About</MenuItem>
              <MenuItem onClick={() => handleNavigation('/contact')}>Contact</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
