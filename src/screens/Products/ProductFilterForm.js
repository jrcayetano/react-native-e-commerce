import React, {useState} from 'react';
import {Button, TextInput, Text, View, Switch} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import {generalStyles} from './../../styles/General.style';
import * as Yup from 'yup';
import {Picker} from '@react-native-community/picker';

const ProductFilterForm = ({onSubmit, filter}) => {
  const handleOnSubmitForm = (formValues) => {
    onSubmit(formValues);
  };

  const [form, setForm] = useState({
    searchTerm: (filter && filter.searchTerm) || '',
    clock: (filter && filter.clock) || false,
    light: (filter && filter.light) || false,
    player: (filter && filter.player) || false,
    mouse: (filter && filter.mouse) || false,
    min: (filter && filter.min) || null,
    max: (filter && filter.max) || null,
    rating: (filter && filter.rating) || null,
  });

  return (
    <View style={[generalStyles.form, {borderWidth: 0, padding: 0}]}>
      <Formik initialValues={form} onSubmit={handleOnSubmitForm}>
        {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
          <>
            <View style={generalStyles.formRow}>
              <TextInput
                style={generalStyles.input}
                placeholder="searchTerm"
                onChangeText={handleChange('searchTerm')}
                onBlur={handleBlur('searchTerm')}
                value={values.searchTerm}
              />
            </View>
            <View style={[generalStyles.formRow, generalStyles.labeledField]}>
              <Text>Relojes</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  setFieldValue('clock', value);
                }}
                value={values.clock}
              />
            </View>
            <View style={[generalStyles.formRow, generalStyles.labeledField]}>
              <Text>Lamparas</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  setFieldValue('light', value);
                }}
                value={values.light}
              />
            </View>
            <View style={[generalStyles.formRow, generalStyles.labeledField]}>
              <Text>Reproductor</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  setFieldValue('player', value);
                }}
                value={values.player}
              />
            </View>
            <View style={[generalStyles.formRow, generalStyles.labeledField]}>
              <Text>Ratón</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  setFieldValue('mouse', value);
                }}
                value={values.mouse}
              />
            </View>
            <View style={[generalStyles.formRow]}>
              <TextInput
                placeholder="Precio mínimo"
                style={[generalStyles.input]}
                onChangeText={handleChange('min')}
                onBlur={handleBlur('min')}
                value={values.min}
                keyboardType={'numeric'}
              />
            </View>

            <View style={[generalStyles.formRow]}>
              <TextInput
                style={[generalStyles.input]}
                placeholder="Precio máximo"
                onChangeText={handleChange('max')}
                onBlur={handleBlur('max')}
                value={values.max}
                keyboardType={'numeric'}
              />
            </View>

            <View style={[generalStyles.formRow, generalStyles.labeledField]}>
              <Picker
                placeholder={'Selecciona'}
                selectedValue={values.rating}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('rating', itemValue);
                }}>
                <Picker.Item label="Valoraciones mayor de" value={null} />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            <Button title="filtrar" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default ProductFilterForm;
