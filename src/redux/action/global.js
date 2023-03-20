import {globalAction} from '../reducer/global';

const setLoading = value => {
  return globalAction.setLoading(value);
};

export default setLoading;
