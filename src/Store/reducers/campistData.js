import { addReducer } from 'reactn';
import { CAMPIST_DATA } from './storeNames';

export const store = {
  [CAMPIST_DATA]: {}
};

addReducer('initCampistData', state => {
  return {
    ...state,
    [CAMPIST_DATA]: store
  };
});

addReducer('addCampistData', (state, newCampistData) => {
  console.log('addCampistData', newCampistData);
  return {
    ...state,
    [CAMPIST_DATA]: {
      ...state[CAMPIST_DATA],
      newCampistData
    }
  };
});

addReducer('setCampistData', (state, key, value) => {
  console.log('setCampistData');
  const newState = state;
  newState[CAMPIST_DATA][key] = value;
  return newState;
});
