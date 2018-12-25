import firebase from './index';

export const campistsCollection = firebase.firestore().collection('campists');

export const getAllCampists = () => {
  const query = campistsCollection;

  return query.get().then(querySnapshot => {
    if (!querySnapshot || (querySnapshot && querySnapshot.empty)) {
      return [];
    }
    return querySnapshot.docs;
  });
};

export const addCampist = newCampist => {
  return campistsCollection.add({ ...newCampist });
};
