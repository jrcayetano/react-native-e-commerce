import {combineReducers} from 'redux';
import {RootActionType} from '../actions/RootActions';
import appReducer from './AppReducers';
import basketReducer from './BasketReducers';
import userLoggedReducer from './UserLoggedReducers';
import AsyncStorage from '@react-native-community/async-storage';

const appGeneralReducer = combineReducers({
  app: appReducer,
  basket: basketReducer,
  userLogged: userLoggedReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RootActionType.LOGOUT) {
    console.log('llega');
    AsyncStorage.clear();
    state = undefined;
  }
  return appGeneralReducer(state, action);
};

export default rootReducer;
