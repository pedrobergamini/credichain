import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import LoanHome from './pages/LoanHome';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/loans/home" component={LoanHome} />
      <Route path="/welcome" component={Welcome} />
    </Switch>
  );
}
