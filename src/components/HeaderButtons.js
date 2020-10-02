import React from 'react';
import {Button, View} from 'react-native';
import Basket from './Basket';

const HeaderButtons = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('basket');
  };
  return (
    <View style={{flexDirection: 'row', paddingRight: 20}}>
      <Basket onBasketClick={handleBasketClick} />
      <Button onPress={() => navigation.toggleDrawer()} title="Menu"></Button>
    </View>
  );
};

export default HeaderButtons;
