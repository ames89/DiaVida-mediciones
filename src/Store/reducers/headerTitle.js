import { HEADER_TITLE } from './storeNames';
import { addReducer } from 'reactn';

export const store = {
  [HEADER_TITLE]: ''
};

addReducer('setHeaderTitle', (state, headerTitle) => {
  return {
    ...state,
    [HEADER_TITLE]: headerTitle
  };
});
