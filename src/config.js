import React from 'react';

import lightBlue from 'material-ui/colors/lightBlue';
import pink from 'material-ui/colors/pink';

import DashboardIcon from 'material-ui-icons/Dashboard';
import PersonIcon from 'material-ui-icons/Person';

export const configuredTheme = {
  direction: 'ltr',
  typography: {
    fontFamily: 'Barlow',
    fontSize: 14,
    subheading: {
      fontSize: '14px'
    }
  },
  palette: {
    type: 'light',
    primary: lightBlue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#FFF',
        color: '#000'
      }
    }
  }
};

export const menuItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon fontSize />
  },
  {
    title: 'Login',
    href: '/login',
    icon: <PersonIcon fontSize />
  }
];
