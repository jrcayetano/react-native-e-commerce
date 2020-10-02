import React from 'react';
import {Button, View} from 'react-native';
import Basket from './Basket';

const HeaderButtons = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('basket');
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <Basket onBasketClick={handleBasketClick} />
      <Button onPress={() => alert('This is a button!')} title="Menu"></Button>
    </View>
  );
};

export default HeaderButtons;
