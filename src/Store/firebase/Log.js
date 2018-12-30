import firebase from './index';

export const logsCollection = firebase.firestore().collection('logs');

export const getAllLogsPerCampist = campistId => {
  const query = logsCollection.where('campist', '==', campistId);

  return query.get().then(querySnapshot => {
    if (!querySnapshot || (querySnapshot && querySnapshot.empty)) {
      return [];
    }
    return querySnapshot.docs;
  });
};

export const getLogById = id => {
  const query = logsCollection;
  const doc = query.doc(id);

  return doc.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      return { doc, docSnapshot };
    }
    return undefined;
  });
};

export const addLog = newLog => {
  return logsCollection.add({ ...newLog });
};
