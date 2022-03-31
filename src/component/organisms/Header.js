import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
        <AppBar position="static">
            <Typography variant="h5" component="h1">
                Program
            </Typography>
        </AppBar>
  );
}

export default Header;