import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '512px'
  },
  nav: {
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
      textAlign: 'center'
    }
  },
  desc: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2)
    },
  }
}));

export default function Portfolio(props) {
  const classes = useStyles();
  
  const content = {
    'header': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'description': 'But in a much more real sense, I had no idea what to do. No, no, no. I don\'t wanna hear moaning. This is a good day.',
    'category1': 'Architecture',
    'category2': 'Nature',
    'category3': 'Wedding',
    'category4': 'Portrait',
    'category5': 'Product',
    'image1': 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'image2': 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    ...props.content
  };

  return (
    <section>
      <Box pt={8} pb={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card className={classes.nav}>
              <CardContent>
                <Button><Typography variant="h5">{content['category1']}</Typography></Button><br />
                <Button><Typography variant="h5" color="textSecondary">{content['category2']}</Typography></Button><br />
                <Button><Typography variant="h5" color="textSecondary">{content['category3']}</Typography></Button><br />
                <Button><Typography variant="h5" color="textSecondary">{content['category4']}</Typography></Button><br />
                <Button><Typography variant="h5" color="textSecondary">{content['category5']}</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image1']} />
              </CardActionArea>
            </Card>
            <Box mt={4} className={classes.desc}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['header']}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image2']} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}