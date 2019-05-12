import React from 'react';
import styled from 'styled-components';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { ButtonLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';
import { createPosition } from '../../actions/';
import PositionForm from './PositionForm';

const TwoColumnPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
`;

const TwoColumn = styled.div`
  grid-column: span 2;

`;

const SixColumn = styled.div`
  grid-column: span 6;
`;

function PositionList() {
  return (
    <Page>
      {/* <ButtonLink to="/position/new">New position</ButtonLink> */}
      <hr />
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
            <TwoColumnPageLayout>
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
                <PositionForm onSubmit={values => createPosition(values)} />
              </TwoColumn>
            </TwoColumnPageLayout>
          );
        }}
      </FirestoreCollection>

      <hr />
    </Page>
  );
}

export default PositionList;
