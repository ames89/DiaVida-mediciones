import {
  setGlobal
  // addReducer
} from 'reactn';
import { store as headerTitleStore } from './headerTitle';
import { getNewStore as campistDataStore } from './campistData';
import {
  getNewLogFoodStore,
  getNewLogInjectionStore,
  getNewLogMeditionStore
} from './logsData';
import { getNewStore as getNewDoctor } from './doctorData';
import { getNewStore as getNewStaff } from './staffData';

const initData = {
  // isAdmin: false,
  ...headerTitleStore,
  ...campistDataStore(),
  ...getNewLogFoodStore(),
  ...getNewLogInjectionStore(),
  ...getNewLogMeditionStore(),
  ...getNewDoctor(),
  ...getNewStaff()
};
setGlobal(initData);

// addReducer('setIsAdmin', (state, value) => {
//   return { ...state, isAdmin: value };
// });
