import { changeLang } from 'redux/reducers/appSettings';
import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;

export const changeLanguage = (data) => {
  dispatch(changeLang(data));
};

export const changeTheme = (data) => {
    dispatch(changeTheme(data));
  };