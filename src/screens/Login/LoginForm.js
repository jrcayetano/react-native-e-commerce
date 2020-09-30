import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {generalStyles} from './../../styles/General.style';

const LoginForm = ({onSubmitForm}) => {
  return (
    <View style={generalStyles.form}>
      <Formik initialValues={{email: ''}} onSubmit={onSubmitForm}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View>
              <Button onPress={handleSubmit} title="Login" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
