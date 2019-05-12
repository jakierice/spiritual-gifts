import React from 'react';

import FirebaseAuth from '../misc/FirebaseAuth';
import Error from '../misc/Error';
import { createPosition, logIn } from '../../actions/';
import PositionForm from './PositionForm';
import { Page } from '../../ui-elements/layout';

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
              <p>You must be logged in to add posts</p>
              <button onClick={logIn}>log in</button>
            </div>
          );
        }

        return (
          <PositionForm
            onSubmit={values =>
              createPosition(values).then(post => history.push(`/`))
            }
          />
        );
      }}
    </FirebaseAuth>
  </Page>
);

export default PostNew;
