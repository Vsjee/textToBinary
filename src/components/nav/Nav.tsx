import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            toBinary
          </Typography>
          <Link to={'/history'} style={{ color: 'white' }}>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <HistoryIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav;
