import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Error from '../misc/Error';
import { InternalLink } from '../../ui-elements/links';
import { Page } from '../../ui-elements/layout';

function MatchList() {
  return (
    <Page>
      <hr />
      <FirestoreCollection path={'positions'}>
        {({ data: positions }) => {
          return (
            <FirestoreCollection path={'candidates'} sort="createdOn:desc">
              {({ error, isLoading, data: candidates }) => {
                const matches = positions.reduce((acc, position) => {
                  const matchingCandidates = candidates.filter(candidate => {
                    const [firstGift, secondGift, thirdGift] = candidate.gifts;
                    const hasFirstGift = position.gifts.includes(firstGift);
                    const hasSecondGift = position.gifts.includes(secondGift);
                    const hasThirdGift = position.gifts.includes(thirdGift);

                    if (hasFirstGift && hasSecondGift && hasThirdGift) {
                      return candidate;
                    }
                  });
                  return [...acc, { ...position, matchingCandidates }];
                }, []);
                if (error) {
                  return <Error error={error} />;
                }

                if (isLoading) {
                  return <p>loading...</p>;
                }

                if (candidates.length === 0) {
                  return <p>No candidates yet!</p>;
                }

                return matches.map(match => {
                  return (
                    <React.Fragment>
                      <h2>{match.title}</h2>
                      <ul>
                        {match.matchingCandidates.length === 0 ? (
                          <li>No matching candidates at this time.</li>
                        ) : (
                          match.matchingCandidates.map(candidate => {
                            return (
                              <li key={candidate.key}>
                                {candidate.firstName} {candidate.lastName}
                              </li>
                            );
                          })
                        )}
                      </ul>
                    </React.Fragment>
                  );
                });
              }}
            </FirestoreCollection>
          );
        }}
      </FirestoreCollection>

      <hr />
    </Page>
  );
}

export default MatchList;
