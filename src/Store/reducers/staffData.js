import { addReducer } from 'reactn';
import { STAFF_DATA } from './storeNames';

export const STAFF_RANKS = {
  LEADER: 'Líder',
  HELPER: 'Apoyo'
};

export const getNewStore = () => {
  return {
    [STAFF_DATA]: {
      deleted: false,
      isAdmin: false,
      names: '',
      lastNames: '',
      email: '',
      phone: '',
      team: '',
      age: '',
      rank: ''
    }
  };
};

addReducer('initStaffData', state => {
  return {
    ...state,
    ...getNewStore()
  };
});

addReducer('staffDataSetValue', (state, key, value) => {
  const newState = { ...state };
  newState[STAFF_DATA][key] = value;
  return newState;
});

addReducer('staffDataSet', (state, data) => {
  return {
    ...state,
    [STAFF_DATA]: data
  };
});
