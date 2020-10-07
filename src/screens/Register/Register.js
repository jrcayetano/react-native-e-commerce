import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RegisterForm from './RegisterForm';
import {getStates} from './../../services/States.service';
import {register} from './../../services/Register.service';

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
        if (response && response.data) {
          navigation.navigate('login');
        }
      })
      .catch((error) => alert(error));
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
