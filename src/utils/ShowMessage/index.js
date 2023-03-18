import {showMessage as showToast} from 'react-native-flash-message';

const ShowMessage = (message, type, bgColor, color) => {
  showToast({
    message: message,
    type: type,
    backgroundColor: bgColor,
    color: color,
  });
};

export default ShowMessage;
