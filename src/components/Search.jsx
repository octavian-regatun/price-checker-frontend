import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Axios from 'axios';

const styles = () => ({});

export class Search extends PureComponent {
  state = {
    search: ''
  };

  onSearchButtonClick = () => {
    Axios.get(
      `https://or-price-checker-backend.herokuapp.com/products/name/${this.state.search}`
    )
      .then((response) => {
        console.log(response);
        this.props.productsCallback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { classes } = this.props;
    return (
      <>
        <TextField
          id='filled-basic'
          label='Caută produsul'
          variant='filled'
          style={{ backgroundColor: 'white', borderRadius: '5px' }}
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <Button
          variant='contained'
          style={{ marginLeft: '16px' }}
          onClick={this.onSearchButtonClick}
        >
          Caută
        </Button>
      </>
    );
  }
}

export default withStyles(styles)(Search);
