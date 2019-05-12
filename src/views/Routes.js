// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import PostList from './posts/PostList'
// import PostNew from './posts/PostNew'
// import Search from './search/Search'
// import Account from './account/Account'
// import PostEdit from './posts/PostEdit'
// import Post from './posts/Post'
import { PositionList, PositionNew } from './position';
import { CandidateList, CandidateNew } from './candidate';
import { MatchList } from './matches';
import Error from './misc/Error';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MatchList} />
    <Route exact path="/position" component={PositionList} />
    <Route exact path="/position/new" component={PositionNew} />
    <Route exact path="/candidate" component={CandidateList} />
    <Route exact path="/candidate/new" component={CandidateNew} />
    {/* <Route exact path="/" component={PostList} />
    <Route path="/new" component={PostNew} />
    <Route path="/search" component={Search} />
    <Route path="/account" component={Account} />
    <Route path="/:slug/edit" component={PostEdit} />
    <Route path="/:slug" component={Post} /> */}
    <Route component={Error} />
  </Switch>
);

export default Routes;
