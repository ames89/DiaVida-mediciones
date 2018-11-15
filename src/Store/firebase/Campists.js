import firebase from './index';

export const getAllCampists = render => {
  const query = firebase
    .firestore()
    .collection('campists')
    .orderBy('team', 'asc');

  getDocumentsInQuery(query, render);
};

const getDocumentsInQuery = (query, render) => {
  query.onSnapshot(snapshot => {
    if (!snapshot.size) {
      return render();
    }

    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        render(change.doc);
      }
    });
  });
};
