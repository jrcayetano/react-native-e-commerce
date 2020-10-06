import React, {useState} from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {Formik} from 'formik';
import {generalStyles} from './../../styles/General.style';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const initialValues = {email: '', password: ''};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({onSubmitForm}) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={generalStyles.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          values,
        }) => (
          <>
            <View style={generalStyles.formRow}>
              <Input
                value={values.email}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorMessage={errors.email}
                renderErrorMessage={
                  (errors.email && touched.email) || submitted
                }
                leftIcon={<Icon name="envelope" size={20} color="#555" />}
              />
            </View>
            <View style={generalStyles.formRow}>
              <Input
                value={values.password}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorMessage={errors.password}
                renderErrorMessage={
                  (errors.password && touched.password) || submitted
                }
                secureTextEntry={true}
                leftIcon={<Icon name="key" size={20} color="#555" />}
              />
            </View>
            <View>
              <Button
                onPress={(values) => {
                  setSubmitted(true);
                  handleSubmit(values);
                }}
                title="Entrar"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
