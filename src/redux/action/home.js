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
const getFoodDataByTypes = types => dispatch => {
  axios
    .get(`${API_HOST.url}/food?types=${types}`)
    .then(res => {
      if (types === 'new_food') {
        dispatch(homeSliceAction.setFoodNewTaste(res.data.data.data));
      }
      if (types === 'popular') {
        dispatch(homeSliceAction.setFoodPopular(res.data.data.data));
      }
      if (types === 'recommended') {
        dispatch(homeSliceAction.setFoodRecommended(res.data.data.data));
      }
    })
    .catch(err => {
      console.log('error : ', err);
    });
};

export {getFoodData, getFoodDataByTypes};
