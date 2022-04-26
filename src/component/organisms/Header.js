import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <>
        <AppBar position="static">
            <Typography variant="h5" component="h1">
                Program
            </Typography>
        </AppBar>
        <Box mb={5}/>
    </>
  );
}

export default Header;