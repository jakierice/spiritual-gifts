import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { ButtonLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';

function PositionList() {
  return (
    <Page>
      <ButtonLink to="/position/new">New position</ButtonLink>
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
            <div>
              {data.map(position => {
                return (
                  <React.Fragment key={position.key}>
                    <h2>{position.title}</h2>
                    <ul>
                      {position.gifts.map(gift => (
                        <li key={gift}>{gift}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                );
              })}
            </div>
          );
        }}
      </FirestoreCollection>

      <hr />
    </Page>
  );
}

export default PositionList;
