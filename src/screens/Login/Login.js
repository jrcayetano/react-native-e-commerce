import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import LoginForm from './LoginForm';
import {loginPageStyle} from './../../styles/LoginPage.style';
import {login, getUserByEmail} from './../../services/Login.service';
import {useDispatch, connect} from 'react-redux';
import {
  SetProfile,
  SetIsLogged,
  SetEmail,
  SetUsername,
} from './../../state/actions/UserLoggedActions';
import {setToken} from './../../state/actions/AppActions';
import auth from '@react-native-firebase/auth';

const Login = ({selectedMenu}) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (formValues) => {
    login(formValues)
      .then((response) => {
        saveLoguedUser(response);
        // alert(response);
        //  console.log(response);
        // getUserLoggedData(response.data, formValues);
      })
      .catch((error) => alert(error));
  };

  const getUserLoggedData = (response, formValues) => {
    if (response && response.accessToken) {
      getUserByEmail(formValues.email)
        .then((userData) => {})
        .catch((error) => {
          throw new Error(error);
        });
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user) => {
    console.log('user logued', user);
    saveLoguedUser(user);

    // setUser(user);
    // if (initializing) setInitializing(false);
  };

  const saveLoguedUser = (user) => {
    if (user) {
      dispatch(SetProfile(user));
      dispatch(SetEmail(user.email));
      dispatch(SetUsername(user.email));
      dispatch(SetIsLogged());
    }
  };

  const saveLoggedUserDataInStore = (response, userData) => {
    dispatch(SetProfile(userData[0]));
    dispatch(setToken(response.accessToken));
    dispatch(SetIsLogged());
    dispatch(SetEmail(userData[0].email));
    dispatch(SetUsername(userData[0].username));
    dispatch(SetProfile(userData));
  };

  return (
    <SafeAreaView
      style={[loginPageStyle.container, {backgroundColor: 'white'}]}>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, marginBottom: 30}}
            resizeMode="cover"
            source={require('./../../assets/images/brand.png')}
          />
          <LoginForm onSubmitForm={handleSubmitForm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  selectedMenu: state.app.selectedMenu,
});

export default connect(mapStateToProps)(React.memo(Login));
