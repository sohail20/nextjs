import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchAppBar from './inputs/SearchBar';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar({ handleSearch, handleAddMoreChat, hideInput, children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add" onClick={handleAddMoreChat}>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          {!hideInput && <SearchAppBar handleSearch={(e) => {
            handleSearch(e.target.value)
          }} />}
          <IconButton color="inherit" >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
