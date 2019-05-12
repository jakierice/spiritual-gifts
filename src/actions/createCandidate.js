import Firebase from 'firebase/app';
import ReactGA from 'react-ga';
import slugify from 'slugify';

import { prepareDocForCreate } from './helpers/firestoreHelpers';

function createCandidate(values) {
  ReactGA.event({
    category: 'Candidate',
    action: 'Create candidate',
  });

  const valuePayload = {
    ...values,
    slug: slugify(`${values.firstName} ${values.lastName}`, { lower: true }),
  };

  return Firebase.firestore()
    .collection('candidates')
    .add(prepareDocForCreate(valuePayload))
    .then(() => {
      return values;
    })
    .catch(error => {
      alert(`Whoops, couldn't create the candidate: ${error.message}`);
    });
}

export default createCandidate;
