import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotReadyPage from 'containers/NotReadyPage';
import { Layout } from 'components';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/seatings-panel" component={HomePage} />
          <Redirect from="*" to="/seatings-panel" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
