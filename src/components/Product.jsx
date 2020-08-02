import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia
} from '@material-ui/core';

const styles = () => ({});

export class Product extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Card style={{ marginTop: '16px' }}>
          <CardActionArea>
            <Typography
              variant='h6'
              gutterBottom
              align='center'
              style={{
                fontFamily: 'SF Pro'
              }}
            >
              {this.props.name}
            </Typography>
            <CardMedia
              component='img'
              alt={this.props.name}
              image={this.props.imgSrc}
              title='Contemplative Reptile'
              style={{
                height: '140px',
                width: '140px',
                margin: '16px auto 16px auto'
              }}
            />
            <Typography
              variant='h6'
              gutterBottom
              align='center'
              style={{
                fontFamily: 'SF Pro'
              }}
            >
              {`${this.props.price} RON`}
            </Typography>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(Product);
