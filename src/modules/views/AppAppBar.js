import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function renderSignIn(props) {
  return null;
  /*const { classes } = props;
  return (<div className={classes.right}>
    <Link
      color="inherit"
      variant="h6"
      underline="none"
      className={classes.rightLink}
      href="/sign-in"
    >
      {'Sign In'}
    </Link>
    <Link
      variant="h6"
      underline="none"
      className={clsx(classes.rightLink, classes.linkSecondary)}
      href="/sign-up"
    >
      {'Sign Up'}
    </Link>
  </div>);*/
}

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            131 Kensington Ave, Jersey City, NJ, 07304
          </div>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={AdapterLink} to={"/"}
          >
            {'Gloria Gables'}
          </Link>
          {renderSignIn()}
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
