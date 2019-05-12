import React from 'react';
import styled from 'styled-components';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import {
  ButtonLink,
  RightSidebar,
  MainContent,
  ShowOnMobile,
  Page,
} from '../../ui-elements';
import { createPosition } from '../../actions/';
import PositionForm from './PositionForm';

function PositionList() {
  return (
    <Page>
      <FirestoreCollection path={'positions'} sort="createdOn:desc">
        {({ error, isLoading, data }) => {
          if (error) {
            return <Error error={error} />;
          }

          if (isLoading) {
            return <p>loading...</p>;
          }

          if (data.length === 0) {
            return <p>No positions yet!</p>;
          }

          return (
            <React.Fragment>
              <MainContent>
                <ShowOnMobile>
                  <ButtonLink to="/position/new">New position</ButtonLink>
                </ShowOnMobile>
                <h2>Current positions</h2>
                {data.map(position => {
                  return (
                    <React.Fragment>
                      <h3>{position.title}</h3>
                      <ul>
                        {position.gifts.map((gift, index) => (
                          <li key={gift + index}>{gift}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </MainContent>
              <RightSidebar>
                <h2>Create new position</h2>
                <PositionForm onSubmit={values => createPosition(values)} />
              </RightSidebar>
            </React.Fragment>
          );
        }}
      </FirestoreCollection>
    </Page>
  );
}

export default PositionList;
