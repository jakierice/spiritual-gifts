import React from 'react';

import logIn from '../../actions/logIn';
import FirebaseAuth from '../misc/FirebaseAuth';
import Error from '../misc/Error';
import Profile from './Profile';
// import Subscription from './Subscription';
import { Button, Page } from '../../ui-elements';

const Account = () => (
  <Page>
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {
        if (isLoading) {
          return <p>loading...</p>;
        }

        if (error) {
          return <Error error={error} />;
        }

        if (!auth) {
          return (
            <div>
              <p>Log in to see your account</p>
              <Button onClick={logIn}>Log in</Button>
            </div>
          );
        }

        return (
          <div>
            <Profile auth={auth} />
            <hr />
            {/* <Subscription auth={auth} /> */}
          </div>
        );
      }}
    </FirebaseAuth>
  </Page>
);

export default Account;
