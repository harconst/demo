import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/async.component';
import Simple from './layouts/layout-simple/layout-simple.component';

const AsyncDashboard = asyncComponent(() =>
  import('./containers/dashboard/dashboard.component')
);
const AsyncDetails = asyncComponent(() =>
  import('./containers/details/details.component')
);
const AsyncNotFound = asyncComponent(() =>
  import('./containers/not-found/not-found.component')
);

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const SimpleLayout = props => <Simple>{props.children}</Simple>;

export default ({ childProps }) => (
  <Switch>
    <AppRoute
      path="/"
      exact
      component={AsyncDashboard}
      props={childProps}
      layout={SimpleLayout}
    />
    <AppRoute
      path="/details/:number"
      exact
      component={AsyncDetails}
      props={childProps}
      layout={SimpleLayout}
    />
    <AppRoute component={AsyncNotFound} layout={SimpleLayout} />
  </Switch>
);
