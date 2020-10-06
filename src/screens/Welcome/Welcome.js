import React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
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
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          style={{width: 100, height: 100, marginBottom: 30}}
          resizeMode="cover"
          source={require('./../../assets/images/brand.png')}
        />
        <Text>Be commerce the best shop</Text>
      </View>
      <View style={welcomeStyles.actionBar}>
        <TouchableOpacity onPress={handleLogin}>
          <View
            style={{
              backgroundColor: '#ffc107',
              padding: 10,
              borderRadius: 20,
              width: 120,
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: '700'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <View
            style={{
              backgroundColor: '#6c757d',
              padding: 10,
              borderRadius: 20,
              width: 120,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>Registro</Text>
          </View>
        </TouchableOpacity>
        {/* <Button
          style={welcomeStyles.accessButton}
          onPress={handleLogin}
          title="Login"
          color="#841584"
          accessibilityLabel="Login button"
        /> */}
        {/* <Button
          style={welcomeStyles.accessButton}
          onPress={handleRegister}
          title="Register"
          color="#841584"
          accessibilityLabel="Register button"
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
