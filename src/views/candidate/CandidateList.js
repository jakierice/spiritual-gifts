import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import { createCandidate } from '../../actions';
import Error from '../misc/Error';
import {
  ButtonLink,
  PageLayout,
  RightSidebar,
  MainContent,
  Page,
  ShowOnMobile,
} from '../../ui-elements';
import CandidateForm from './CandidateForm';

function PositionList() {
  return (
    <Page>
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
              <MainContent>
                <ShowOnMobile>
                  <ButtonLink to="/candidate/new">New candidate</ButtonLink>
                </ShowOnMobile>
                <h2>Current candidates</h2>
                <ul>
                  {data.map(position => {
                    return (
                      <li key={position.key}>
                        {position.firstName} {position.lastName}
                      </li>
                    );
                  })}
                </ul>
              </MainContent>
              <RightSidebar>
                <CandidateForm onSubmit={values => createCandidate(values)} />
              </RightSidebar>
            </React.Fragment>
          );
        }}
      </FirestoreCollection>
    </Page>
  );
}

export default PositionList;
