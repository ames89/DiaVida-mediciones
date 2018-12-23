import { addReducer } from 'reactn';
import { CAMPIST_DATA } from './storeNames';

export const store = {
  [CAMPIST_DATA]: {
    name: '',
    lastname: '',
    yearsOld: '',
    weight: '',
    team: '',
    drugs: '',
    allergies: ''
  }
};

addReducer('initCampistData', state => {
  return {
    ...state,
    [CAMPIST_DATA]: { ...store[CAMPIST_DATA] }
  };
});

addReducer('setCampistData', (state, key, value) => {
  const newState = { ...state };
  newState[CAMPIST_DATA][key] = value;
  return newState;
});
