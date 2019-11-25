import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapIcon from '@material-ui/icons/Map';
import HotelIcon from '@material-ui/icons/Hotel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SvgIcon
                key="great_location"
                aria-label="great location"
                color="secondary"
                fontSize="large"
                className={classes.image}
              >
                <MapIcon />
              </SvgIcon>
              <Typography variant="h6" className={classes.title}>
                Great location
              </Typography>
              <Typography variant="h5">
                {'Located in Jersey city\'s historic district, just a minute walk from Lincoln Park'}
                {', a 15 minute bus ride away from Journal Square, and a 40 minute commute into Manhattan.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SvgIcon
                key="amenities"
                aria-label="amenities"
                color="secondary"
                fontSize="large"
                className={classes.image}
              >
                <HotelIcon />
              </SvgIcon>
              <Typography variant="h6" className={classes.title}>
                Amenities
              </Typography>
              <Typography variant="h5">
                {'We feature an in-doors super, backyard with a grill, video operated intercom, '}
                {'security cameras across the building, and a heavily equipped laundry room.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SvgIcon
                key="we_care"
                aria-label="we care"
                color="secondary"
                fontSize="large"
                className={classes.image}
              >
                <FavoriteIcon />
              </SvgIcon>
              <Typography variant="h6" className={classes.title}>
                We care
              </Typography>
              <Typography variant="h5">
                {'The building has a classic aesthetic which we wish to preserve, '}
                {'the community in the building is caring and friendly. Come join us!'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
