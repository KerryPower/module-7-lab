import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { navItems } from './NavItems';

export default function NavBar() {
  return (
    <div className="NavBar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ textAlign: 'left', flexGrow: 1 }}>
            Module 7
          </Typography>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.path} style={{ marginLeft: 16 }}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow' : 'white',
                    textDecoration: 'none',
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}