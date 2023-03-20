const {default: axios} = require('axios');
import {API_HOST} from '../../config';
import {homeSliceAction} from '../reducer/home';

const getFoodData = () => dispatch => {
  axios
    .get(`${API_HOST.url}/food`)
    .then(res => {
      //   console.log('response : ', res.data.data.data);
      dispatch(homeSliceAction.setFood(res.data.data.data));
    })
    .catch(err => {
      console.log('error : ', err);
    });
};

export {getFoodData};
