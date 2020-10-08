import http from 'axios';
import {SERVER_URL, API_LOGIN} from './../consts/api';
import auth from '@react-native-firebase/auth';
const url = `${SERVER_URL}`;

export const login = ({email, password}) => {
  // return http.post(`${url}/${API_LOGIN}`, { email, password });
  return auth().signInWithEmailAndPassword(email, password);
};

export const getUserByEmail = (email) => {
  return http.get(`${url}/users?email=${email}`);
};

export const firebaseLogout = () => {
  return auth().signOut();
};
