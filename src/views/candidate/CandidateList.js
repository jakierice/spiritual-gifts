import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { InternalLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';

function PositionList() {
  return (
    <Page>
      <InternalLink to="/candidate/new">New candidate</InternalLink>
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

      {/* For paid subscribers only */}
      {/* <SpiritualGiftsSubscription>
        {({ isLoading, error, subscription }) => {
          if (error) {
            return <Error error={error} />;
          }

          if (isLoading) {
            return <p>loading...</p>;
          }

          // if (!subscription) {
          //   return (
          //     <div>
          //       <p>Only paid subscribers can see what goes here</p>
          //       <InternalLink to={`/account`}>Subscribe now</InternalLink>
          //     </div>
          //   );
          // }

          return (
            <div>
              <p>Super-fancy subscription-only features go here!</p>
            </div>
          );
        }}
      </SpiritualGiftsSubscription> */}
    </Page>
  );
}

export default PositionList;
