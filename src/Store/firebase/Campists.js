import firebase from './index';

export const getAllCampistsLive = render => {
  const query = firebase.firestore().collection('campists');
  getDocumentsInQuery(query, render);
};

export const getAllCampists = listing => {
  const query = firebase.firestore().collection('campists');

  return query.get().then(querySnapshot => {
    if (!querySnapshot || (querySnapshot && querySnapshot.empty)) {
      return [];
    }
    return querySnapshot.docs;
  });
};

const getDocumentsInQuery = (query, render) => {
  query.onSnapshot(snapshot => {
    if (!snapshot.size) {
      return render();
    }
    debugger;

    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        render(change.doc);
      }
    });
  });
};
