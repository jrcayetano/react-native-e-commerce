import React, {useEffect, useState} from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {generalStyles} from '../../styles/General.style';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {
  VALID_EMAIL_PATTERN,
  VALID_ZIP_PATTERN,
  VALID_PASSWORD_PATTERN,
} from '../../consts/patterns';
import {Picker} from '@react-native-community/picker';

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
});

const EditProfileForm = ({states, profile, onSubmitForm}) => {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState(false);
  const [initialValues, setInitialValues] = useState({
    username: (profile && profile.username) || '',
    email: (profile && profile.email) || '',
    name: (profile && profile.name) || '',
    surname: (profile && profile.surname) || '',
    address: (profile && profile.address) || '',
    city: (profile && profile.city) || '',
    state: (profile && profile.state) || '',
    zip: (profile && profile.zip) || '',
    password: (profile && profile.repassword) || '',
    repassword: (profile && profile.repassword) || '',
  });

  useEffect(() => {
    setInitialValues({
      username: (profile && profile.username) || '',
      email: (profile && profile.email) || '',
      name: (profile && profile.name) || '',
      surname: (profile && profile.surname) || '',
      address: (profile && profile.address) || '',
      city: (profile && profile.city) || '',
      state: (profile && profile.state) || '',
      zip: (profile && profile.zip) || '',
      password: (profile && profile.repassword) || '',
      repassword: (profile && profile.repassword) || '',
    });
  }, [profile]);

  return (
    <View style={generalStyles.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}>
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
              <Text>Nombre de usuario</Text>
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
              <Text>Email</Text>
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
              <Text>Nombre</Text>
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
              <Text>Apellidos</Text>
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
              <Text>Dirección</Text>
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
              <Text>Ciudad</Text>
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
              <Text>Provincia</Text>
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
              </Picker>
              {((errors.state && touched.state) || submitted) && (
                <Text style={{color: 'red'}}>{errors.state}</Text>
              )}
            </View>
            <View style={generalStyles.formRow}>
              <Text>Código postal</Text>
              <TextInput
                style={generalStyles.input}
                placeholder="zip"
                onChangeText={handleChange('zip')}
                onBlur={handleBlur('zip')}
                value={values.zip}
                keyboardType={'numeric'}
              />
              {((errors.zip && touched.zip) || submitted) && (
                <Text style={{color: 'red'}}>{errors.zip}</Text>
              )}
            </View>
            <View>
              <Button
                onPress={(values) => {
                  setSubmitted(true);
                  handleSubmit(values);
                }}
                title="Realizar cambios"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default EditProfileForm;
