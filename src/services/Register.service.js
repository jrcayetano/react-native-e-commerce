import http from 'axios';
import {SERVER_URL, API_REGISTER} from './../consts/api';
import auth from '@react-native-firebase/auth';

export const register = ({email, password}) => {
  // return http.post(`${SERVER_URL}/${API_REGISTER}`, registerRequest);
  return auth().createUserWithEmailAndPassword(email, password);
};
