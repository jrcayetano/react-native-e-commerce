import React, {useState} from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import {generalStyles} from './../../styles/General.style';
import * as Yup from 'yup';
import {
  VALID_EMAIL_PATTERN,
  VALID_ZIP_PATTERN,
  VALID_PASSWORD_PATTERN,
} from './../../consts/patterns';
import {Picker} from '@react-native-community/picker';

const initialValues = {email: '', password: ''};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string()
    .required('Required')
    .matches(VALID_EMAIL_PATTERN, 'Invalid email pattern'),
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string()
    .required('Required')
    .matches(VALID_ZIP_PATTERN, 'Invalid zip, numeric field only'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Minimun length required 8')
    .matches(
      VALID_PASSWORD_PATTERN,
      'Invalid format, must contain at least lowercase, uppercase,number, special character and a minium length of 8',
    ),
  repassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm = ({states, onSubmitForm}) => {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState(false);
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
          errors,
          touched,
          values,
          setFieldValue,
        }) => (
          <>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              {((errors.username && touched.username) || submitted) && (
                <Text style={{color: 'red'}}>{errors.username}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {((errors.email && touched.email) || submitted) && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {((errors.name && touched.name) || submitted) && (
                <Text style={{color: 'red'}}>{errors.name}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="surname"
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
              />
              {((errors.surname && touched.surname) || submitted) && (
                <Text style={{color: 'red'}}>{errors.surname}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
              {((errors.address && touched.address) || submitted) && (
                <Text style={{color: 'red'}}>{errors.address}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="city"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />
              {((errors.city && touched.city) || submitted) && (
                <Text style={{color: 'red'}}>{errors.city}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <Picker
                selectedValue={values.state}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('state', itemValue);
                }}>
                {states &&
                  states.map((state, index) => (
                    <Picker.Item
                      label={state}
                      value={state}
                      key={`picker_${index}`}
                    />
                  ))}

                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              {((errors.state && touched.state) || submitted) && (
                <Text style={{color: 'red'}}>{errors.state}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="zip"
                onChangeText={handleChange('zip')}
                onBlur={handleBlur('zip')}
                value={values.zip}
              />
              {((errors.zip && touched.zip) || submitted) && (
                <Text style={{color: 'red'}}>{errors.zip}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {((errors.password && touched.password) || submitted) && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="repassword"
                onChangeText={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
                value={values.repassword}
              />
              {((errors.repassword && touched.repassword) || submitted) && (
                <Text style={{color: 'red'}}>{errors.repassword}</Text>
              )}
            </View>
            <View>
              <Button
                onPress={(values) => {
                  setSubmitted(true);
                  handleSubmit(values);
                }}
                title="Register"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
