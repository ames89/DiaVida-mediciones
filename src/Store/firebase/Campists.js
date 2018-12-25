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

export const getCampistById = id => {
  const query = campistsCollection;
  const doc = query.doc(id);

  return doc.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      return { doc, docSnapshot };
    }
    return undefined;
  });
};

export const addCampist = newCampist => {
  return campistsCollection.add({ ...newCampist });
};
