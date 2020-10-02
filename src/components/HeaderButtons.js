import React from 'react';
import {Button, View} from 'react-native';
import Basket from './Basket';

const HeaderButtons = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Basket />
      <Button onPress={() => alert('This is a button!')} title="Menu"></Button>
    </View>
  );
};

export default HeaderButtons;
