import React from 'react';
import PropTypes from 'prop-types';

// Material components
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import themeStyles from './layout-loader.style';

const LayoutLoader = props => {
  const { classes } = props;

  return (
    <div className={classes['loader-wrapper']}>
      <CircularProgress className={classes.progress} size={50} />
      Loading...
    </div>
  );
};

LayoutLoader.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LayoutLoader);
