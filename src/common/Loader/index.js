import Loadable from 'react-loadable';

import Loading from '../Loading';

const Loader = componentImporter => {
  return Loadable({
    loader: componentImporter,
    loading: Loading
  });
};

export default Loader;
