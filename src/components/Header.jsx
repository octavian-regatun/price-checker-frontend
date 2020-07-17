import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const styles = () => ({});

export class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        style={{
          height: '400px',
          width: '100%',
          backgroundImage: 'linear-gradient(to right, #19E7DA, #5E79ED)'
        }}
        alignItems='center'
      >
        <Grid item xs={12}>
          <Typography
            variant='h3'
            gutterBottom
            align='center'
            style={{ fontFamily: 'SF Pro', color: 'white', marginTop: '64px' }}
          >
            Salut!{' '}
            <span role='img' aria-label='emoji'>
              👋
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant='h4'
            gutterBottom
            align='center'
            style={{
              fontFamily: 'SF Pro',
              color: 'white'
            }}
          >
            Aici găsești cele mai ieftine produse de pe marile site-uri de{' '}
            <span style={{ whiteSpace: 'nowrap' }}>e-shopping</span> din România{' '}
            <span role='img' aria-label='emoji'>
              😀
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant='h4'
            gutterBottom
            align='center'
            style={{ fontFamily: 'SF Pro', color: 'white' }}
          >
            Foloseste-ți eficient banii!
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Header);
