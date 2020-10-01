import React from 'react';
import {Button, Text, View, SafeAreaView} from 'react-native';
import {welcomeStyles} from '../../styles/Welcome.style';

const Welcome = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('login');
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };

  return (
    <SafeAreaView style={welcomeStyles.container}>
      <View>
        <Text>aaa</Text>
      </View>
      <View style={welcomeStyles.actionBar}>
        <Button
          style={welcomeStyles.accessButton}
          onPress={handleLogin}
          title="Login"
          color="#841584"
          accessibilityLabel="Login button"
        />
        <Button
          style={welcomeStyles.accessButton}
          onPress={handleRegister}
          title="Register"
          color="#841584"
          accessibilityLabel="Register button"
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
