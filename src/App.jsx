import React from 'react';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Navbar from './components/Navbar';
import { Search } from './components/Search';
import { Header } from './components/Header';
import { Product } from './components/Product';

const theme = createMuiTheme();

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar
});

class App extends React.PureComponent {
  state = {
    products: []
  };

  productsCallback = (products) => {
    this.setState({ products });
  };

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
          <Search productsCallback={this.productsCallback} />
        </Grid>
        <Container maxWidth='md'>
          <Grid container>
            {this.state.products.length > 0
              ? this.state.products.map((product, index) => {
                  return (
                    <Grid item xs={12} key={index}>
                      <Product
                        name={product.name}
                        imgSrc={product.imgSrc}
                        price={product.price}
                      />
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
