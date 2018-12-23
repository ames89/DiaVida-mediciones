import { setGlobal } from 'reactn';
import { store as headerTitleStore } from './headerTitle';
import { store as campistDataStore } from './campistData';

const initData = {
  ...headerTitleStore,
  ...campistDataStore
};

setGlobal(initData);
