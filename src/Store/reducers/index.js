import { setGlobal } from 'reactn';
import { store as headerTitleStore } from './headerTitle';
import { getNewStore as campistDataStore } from './campistData';

const initData = {
  ...headerTitleStore,
  ...campistDataStore()
};
setGlobal(initData);
