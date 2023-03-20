import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowMessage from '../ShowMessage';

const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    ShowMessage(
      'Gagal menyimpan di localstorage',
      'danger',
      '#D9435E',
      'white',
    );
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    ShowMessage(
      'Gagal menampilkan data dari localstorage',
      'danger',
      '#D9435E',
      'white',
    );
  }
};

export {storeData, getData};
