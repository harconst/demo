import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Toolbar from 'material-ui/Toolbar';
import withWidth, { isWidthUp, isWidthDown } from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';

import styles from './layout-simple.style';

function setTitle(currentPath) {
  return 'test title';
}

class SimpleLayout extends React.Component {
  // Set the initial layout state when the layout is initialised
  constructor(props) {
    super(props);
    console.log(props);
    // const variant = isWidthDown('sm', props.width) ? 'temporary' : 'persistent';
    // props.toggleSidenavVariant(variant);
    // props.setSidenavOpen(variant === 'persistent');
  }

  render() {
    const { children, classes, location } = this.props;

    return (
      <div className={classes['layout-simple-wrapper']}>
        <main className={classes['layout-simple-main']}>
          <AppBar color="default" position="static">
            <Toolbar>
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
  }
}

// function mapStateToProps(state) {
//   return {
//     layout: {
//       sidenavOpen: state.layout.sidenavOpen
//     }
//   };
// }

SimpleLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired
  // width: PropTypes.string.isRequired,
  // toggleSidenavVariant: PropTypes.func.isRequired,
  // setSidenavOpen: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  withWidth(),
  withStyles(styles, { withTheme: true })
  // connect(mapStateToProps, {
  //   toggleSidenav,
  //   setSidenavOpen,
  //   toggleSidenavVariant
  // })
)(SimpleLayout);
