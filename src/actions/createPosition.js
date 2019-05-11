import Firebase from 'firebase/app';
import ReactGA from 'react-ga';
import slugify from 'slugify';

import { prepareDocForCreate } from './helpers/firestoreHelpers';

function createPosition(values) {
  ReactGA.event({
    category: 'Post',
    action: 'Create post',
  });

  values.slug = slugify(values.title, { lower: true });

  return Firebase.firestore()
    .collection('positions')
    .add(prepareDocForCreate(values))
    .then(() => {
      return values;
    })
    .catch(error => {
      alert(`Whoops, couldn't create the post: ${error.message}`);
    });
}

export default createPosition;
