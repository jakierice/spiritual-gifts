import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import { createCandidate } from '../../actions';
import Error from '../misc/Error';
import {
  ButtonLink,
  PageLayout,
  TwoColumn,
  SixColumn,
} from '../../ui-elements';
import { Page } from '../../ui-elements/layout';
import CandidateForm from './CandidateForm';

function PositionList() {
  return (
    <Page>
      {/* <ButtonLink to="/candidate/new">New candidate</ButtonLink> */}
      <FirestoreCollection path={'candidates'} sort="createdOn:desc">
        {({ error, isLoading, data }) => {
          if (error) {
            return <Error error={error} />;
          }

          if (isLoading) {
            return <p>loading...</p>;
          }

          if (data.length === 0) {
            return <p>No candidates yet!</p>;
          }

          return (
            <React.Fragment>
              <SixColumn>
                {data.map(position => {
                  return (
                    <li key={position.key}>
                      {position.firstName} {position.lastName}
                    </li>
                  );
                })}
              </SixColumn>
              <TwoColumn>
                <CandidateForm onSubmit={values => createCandidate(values)} />
              </TwoColumn>
            </React.Fragment>
          );
        }}
      </FirestoreCollection>
    </Page>
  );
}

export default PositionList;
