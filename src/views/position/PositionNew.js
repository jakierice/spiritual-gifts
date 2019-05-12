import React from 'react';

import FirebaseAuth from '../misc/FirebaseAuth';
import Error from '../misc/Error';
import { createPosition, logIn } from '../../actions/';
import PositionForm from './PositionForm';
import { Button, Page } from '../../ui-elements';

const PostNew = ({ history }) => (
  <Page>
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {
        if (error) {
          return <Error error={error} />;
        }

        if (isLoading) {
          return <div>loading...</div>;
        }

        if (!auth) {
          return (
            <div>
              <p>You must be logged in to add a new position.</p>
              <Button onClick={logIn}>log in</Button>
            </div>
          );
        }

        return (
          <PositionForm
            onSubmit={values =>
              createPosition(values).then(() => history.push('/'))
            }
          />
        );
      }}
    </FirebaseAuth>
  </Page>
);

export default PostNew;
