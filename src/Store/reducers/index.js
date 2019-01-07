import { setGlobal } from 'reactn';
import { store as headerTitleStore } from './headerTitle';
import { getNewStore as campistDataStore } from './campistData';
import {
  getNewLogFoodStore,
  getNewLogInjectionStore,
  getNewLogMeditionStore
} from './logsData';
import { getNewStore as getNewDoctor } from './doctorData';

const initData = {
  ...headerTitleStore,
  ...campistDataStore(),
  ...getNewLogFoodStore(),
  ...getNewLogInjectionStore(),
  ...getNewLogMeditionStore(),
  ...getNewDoctor()
};
setGlobal(initData);
