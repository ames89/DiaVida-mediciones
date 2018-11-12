import { addReducer, setGlobal } from 'reactn';

setGlobal({
  user: null
});

// Reducers
addReducer('fetchData', () =>
  fetch('index.html')
    .then(response => response.text())
    .then(html => ({
      data: html
    }))
);

addReducer('incrementX', state => ({
  x: state.x + 1
}));
