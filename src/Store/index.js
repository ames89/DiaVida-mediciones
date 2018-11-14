import { addReducer, setGlobal } from 'reactn';

setGlobal({
  headerTitle: ''
});

// Reducers

addReducer('setHeaderTitle', (state, headerTitle) => {
  return {
    ...state,
    headerTitle
  };
});
