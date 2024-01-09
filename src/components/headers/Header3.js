import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Lorem ipsum dolor',
    'header-p2': 'sit amet, consectetur adipiscing elit.',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'help': 'But in a much more real sense, I had no idea what to do.',
    '03_primary-action': 'Subscribe',
    'pattern': 'nereus-assets/img/bg/pattern1.png',
    ...props.content
  };

  return (
    <section className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="primary" variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <FormControl variant="outlined">
              <OutlinedInput
                placeholder="E-mail address"
                endAdornment={<InputAdornment position="end"><Button variant="contained" color="primary">{content['03_primary-action']}</Button></InputAdornment>}
              />
              <Box mt={2}>
                <Typography variant="caption" color="textSecondary">{content['help']}</Typography>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </section>
  );
}