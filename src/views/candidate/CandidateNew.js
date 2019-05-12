import React from 'react';

import FirebaseAuth from '../misc/FirebaseAuth';
import Error from '../misc/Error';
import { createCandidate, logIn } from '../../actions/';
import CandidateForm from './CandidateForm';
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
          <CandidateForm
            onSubmit={values =>
              createCandidate(values).then(() => history.push('/candidate'))
            }
          />
        );
      }}
    </FirebaseAuth>
  </Page>
);

export default PostNew;
