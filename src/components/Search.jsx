import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = () => ({});

export class Search extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <TextField
          id='filled-basic'
          label='Caută produsul'
          variant='filled'
          style={{ backgroundColor: 'white', borderRadius: '5px' }}
        />
      </>
    );
  }
}

export default withStyles(styles)(Search);
