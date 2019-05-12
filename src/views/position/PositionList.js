import React from 'react';
import styled from 'styled-components';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { ButtonLink, TwoColumn, SixColumn } from '../../ui-elements';
import { Page } from '../../ui-elements/layout';
import { createPosition } from '../../actions/';
import PositionForm from './PositionForm';

function PositionList() {
  return (
    <Page>
      {/* <ButtonLink to="/position/new">New position</ButtonLink> */}
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
              <SixColumn>
                {data.map(position => {
                  return (
                    <React.Fragment>
                      <h2>{position.title}</h2>
                      <ul>
                        {position.gifts.map((gift, index) => (
                          <li key={gift + index}>{gift}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </SixColumn>
              <TwoColumn>
                <h3>Create a new position</h3>
                <PositionForm onSubmit={values => createPosition(values)} />
              </TwoColumn>
            </React.Fragment>
          );
        }}
      </FirestoreCollection>
    </Page>
  );
}

export default PositionList;
