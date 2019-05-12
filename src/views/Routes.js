// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PositionList, PositionNew } from './position';
import { CandidateList, CandidateNew } from './candidate';
import { MatchList } from './matches';
import { Account } from './account';
import Error from './misc/Error';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MatchList} />
    <Route exact path="/position" component={PositionList} />
    <Route exact path="/position/new" component={PositionNew} />
    <Route exact path="/candidate" component={CandidateList} />
    <Route exact path="/candidate/new" component={CandidateNew} />
    <Route exact path="/account" component={Account} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
