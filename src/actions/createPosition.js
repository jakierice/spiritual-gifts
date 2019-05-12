import Firebase from 'firebase/app';
import ReactGA from 'react-ga';
import slugify from 'slugify';

import { prepareDocForCreate } from './helpers/firestoreHelpers';

function createPosition(values) {
  ReactGA.event({
    category: 'Position',
    action: 'Create position',
  });

  const valuePayload = {
    slug: slugify(values.title, { lower: true }),
  };

  return Firebase.firestore()
    .collection('positions')
    .add(prepareDocForCreate(valuePayload))
    .then(() => {
      return values;
    })
    .catch(error => {
      alert(`Whoops, couldn't create the position: ${error.message}`);
    });
}

export default createPosition;
