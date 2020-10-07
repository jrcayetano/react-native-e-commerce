import React from 'react';
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

const Login = ({selectedMenu}) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (formValues) => {
    login(formValues)
      .then((response) => {
        getUserLoggedData(response.data, formValues);
      })
      .catch((error) => console.error(error.response.data));
  };

  const getUserLoggedData = (response, formValues) => {
    if (response && response.accessToken) {
      getUserByEmail(formValues.email)
        .then((userData) => {
          saveLoggedUserDataInStore(response, userData.data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };

  const saveLoggedUserDataInStore = (response, userData) => {
    dispatch(SetProfile(userData[0]));
    dispatch(setToken(response.accessToken));
    dispatch(SetIsLogged());
    dispatch(SetEmail(userData[0].email));
    dispatch(SetUsername(userData[0].username));
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
