import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RegisterForm from './RegisterForm';
import {getStates} from './../../services/States.service';
import {register} from './../../services/Register.service';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates()
      .then((response) => setStates(response.data))
      .catch((error) => alert(error));
  }, []);

  const handleSubmit = (formValues) => {
    alert(JSON.stringify(formValues));
    register(formValues)
      .then((response) => {
        console.log(response);
        if (response && response.data) {
          navigation.navigate('login');
        }
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <RegisterForm states={states} onSubmitForm={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Register);
