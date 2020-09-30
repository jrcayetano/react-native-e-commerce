import React from 'react';
import {View, Text} from 'react-native';
import LoginForm from './LoginForm';
import {loginPageStyle} from './../../styles/LoginPage.style';

const Login = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <View style={loginPageStyle.container}>
      <LoginForm onSubmitForm={handleSubmitForm} />
    </View>
  );
};

export default Login;
