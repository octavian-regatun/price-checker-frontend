import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily: 'Quicksand',
    fontWeight: 600,
    color: 'white'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [
    anchorElementCategories,
    setAnchorElementCategories
  ] = React.useState();

  const handleClick = (event) => {
    setAnchorElementCategories(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElementCategories();
  };

  return (
    <AppBar
      position='static'
      style={{ backgroundImage: 'linear-gradient(to right, #19E7DA, #5E79ED)' }}
    >
      <Toolbar>
        <Box
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          style={{ flexGrow: 1 }}
        >
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <Typography
              variant='h6'
              style={{ color: 'white', fontFamily: 'Quicksand' }}
            >
              <b>Categorii</b>
            </Typography>
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorElementCategories}
            keepMounted
            open={Boolean(anchorElementCategories)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Telefoane</MenuItem>
            <MenuItem onClick={handleClose}>Componente PC</MenuItem>
          </Menu>
          <Typography variant='h3' className={classes.title}>
            <span role='img' aria-label='shopping cart emoji'>
              🛒
            </span>{' '}
            BuyCHEAP{' '}
            <span role='img' aria-label='shopping emoji'>
              🛍️
            </span>
          </Typography>
          <Button aria-controls='simple-menu' aria-haspopup='true'>
            <Typography
              variant='h6'
              style={{ color: 'white', fontFamily: 'Quicksand' }}
            >
              <b>PRODUSE POPULARE</b>
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
