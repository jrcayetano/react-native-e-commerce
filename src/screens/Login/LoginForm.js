import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {Formik} from 'formik';
import {generalStyles} from './../../styles/General.style';
import * as Yup from 'yup';

const initialValues = {email: '', password: ''};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({onSubmitForm}) => {
  return (
    <View style={generalStyles.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={{color: 'red'}}>{errors.email}</Text>
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text style={{color: 'red'}}>{errors.password}</Text>
            </View>
            <View>
              <Button onPress={handleSubmit} title="Entrar" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
