import firebase from './index';

export const doctorsCollection = firebase.firestore().collection('doctors');

export const getAllDoctors = () => {
  const query = doctorsCollection.where('deleted', '==', false);

  return query.get().then(querySnapshot => {
    if (!querySnapshot || (querySnapshot && querySnapshot.empty)) {
      return [];
    }
    return querySnapshot.docs;
  });
};

export const getDoctorById = id => {
  const query = doctorsCollection;
  const doc = query.doc(id);

  return doc.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      return { doc, docSnapshot };
    }
    return undefined;
  });
};

export const addDoctor = newDoctor => {
  return doctorsCollection.add({ ...newDoctor });
};
