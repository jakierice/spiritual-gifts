import React from 'react';
import { Route } from 'react-router-dom';

import { logOut } from '../../actions';
import { Button } from '../../ui-elements';

const Profile = ({ auth }) => (
  <Route
    render={({ history }) => (
      <div>
        <img
          src={auth.photoURL}
          alt={auth.displayName}
          width="100"
          height="100"
          style={{
            borderRadius: '49%',
          }}
        />
        <p>
          <strong>{auth.displayName}</strong>
        </p>
        <p>{auth.email}</p>
        <Button onClick={() => logOut().then(() => history.push('/'))}>
          Log out
        </Button>
      </div>
    )}
  />
);

export default Profile;
