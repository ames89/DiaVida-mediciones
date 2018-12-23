import { addReducer, setGlobal } from 'reactn';

const initData = {
  headerTitle: '',
  campistData: {}
};

setGlobal(initData);

// Reducers

addReducer('setHeaderTitle', (state, headerTitle) => {
  return {
    ...state,
    headerTitle
  };
});

addReducer('initCampistData', state => {
  return {
    ...state,
    campistData: initData.campistData
  };
});

addReducer('addCampistData', (state, newCampistData) => {
  console.log('addCampistData', newCampistData);
  return {
    ...state,
    campistData: {
      ...state.campistData,
      newCampistData
    }
  };
});
