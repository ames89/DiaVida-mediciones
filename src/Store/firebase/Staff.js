import firebase from './index';

export const staffCollection = firebase.firestore().collection('staff');

export const getAllStaff = () => {
  const query = staffCollection.where('deleted', '==', false);

  return query.get().then(querySnapshot => {
    if (!querySnapshot || (querySnapshot && querySnapshot.empty)) {
      return [];
    }
    return querySnapshot.docs;
  });
};

export const getStaffById = id => {
  const query = staffCollection;
  const doc = query.doc(id);

  return doc.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      return { doc, docSnapshot };
    }
    return undefined;
  });
};

export const getStaffByEmail = email => {
  const query = staffCollection.where('email', '==', email).limit(1);
  const doc = query;

  return doc.get().then(querySnapshot => {
    if (querySnapshot.docs.length === 1) {
      return { doc: querySnapshot.docs[0].data() };
    }
    return undefined;
  });
};

export const addStaff = newStaff => {
  return staffCollection.add({ ...newStaff });
};
