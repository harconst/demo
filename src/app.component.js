import React from 'react';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { configuredTheme } from './config';
import Routes from './routes';

const App = () => {
  const materialTheme = createMuiTheme(configuredTheme);

  return (
    <MuiThemeProvider theme={materialTheme}>
      <Routes childProps={{}} />
    </MuiThemeProvider>
  );
};

export default withRouter(App);
