import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { ButtonLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';

function PositionList() {
  return (
    <Page>
      <ButtonLink to="/candidate/new">New candidate</ButtonLink>
      <hr />
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
            <div>
              {data.map(position => {
                return (
                  <li key={position.key}>
                    {position.firstName} {position.lastName}
                  </li>
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
