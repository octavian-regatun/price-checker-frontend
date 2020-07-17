import React from 'react';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Navbar from './components/Navbar';
import { Search } from './components/Search';
import { Header } from './components/Header';

const theme = createMuiTheme();

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar
});

class App extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ height: '100vh' }}>
        <Navbar />
        <Grid container item xs={12}>
          <Header />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify='center'
          style={{ marginTop: '-32px' }}
        >
          <Search />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
