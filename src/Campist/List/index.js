import Loadable from 'react-loadable';

import Loading from '../../common/Loading';

const Login = Loadable({
  loader: () => import('./Component'),
  loading: Loading
});
export default Login;
