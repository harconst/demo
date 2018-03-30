import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import HomeIcon from 'material-ui-icons/Home';

import styles from './layout-simple.style';

function setTitle(currentPath) {
  return currentPath === '/' ? 'User\'s Page' : 'Details Page';
}

const SimpleLayout = (props) => {
  const { children, classes, location } = props;

  return (
    <div className={classes['layout-simple-wrapper']}>
      <main className={classes['layout-simple-main']}>
        <AppBar color="default" position="static">
          <Toolbar>
            {location.pathname !== '/' &&
              <Avatar className={classes.avatar}>
                <Link to="/"><HomeIcon /></Link>
              </Avatar>}
            <Typography variant="title" color="inherit" noWrap>
              {setTitle(location.pathname) || 'Route Not Found'}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes['layout-simple-content-wrapper']}>
          <div className={classes['layout-simple-content']}>{children}</div>
        </div>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              <small>&copy; 2018 harconst</small>
            </Typography>
            <span className="util-flex" />
          </Toolbar>
        </AppBar>
      </main>
    </div>
  );
};


SimpleLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(SimpleLayout);
