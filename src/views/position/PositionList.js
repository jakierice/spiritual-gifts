import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { InternalLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';

function PositionList() {
  return (
    <Page>
      <InternalLink to="/position/new">New position</InternalLink>
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
