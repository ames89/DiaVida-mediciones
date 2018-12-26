import { HEADER_TITLE, HEADER_GOBACK } from './storeNames';
import { addReducer } from 'reactn';

export const store = {
  [HEADER_TITLE]: '',
  [HEADER_GOBACK]: false
};

addReducer('setHeaderTitle', (state, headerTitle) => {
  return {
    ...state,
    [HEADER_TITLE]: headerTitle
  };
});

addReducer('setHeaderGoBack', (state, goBack) => {
  return {
    ...state,
    [HEADER_GOBACK]: goBack
  };
});
