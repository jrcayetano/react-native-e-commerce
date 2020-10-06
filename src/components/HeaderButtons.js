import React from 'react';
import {Button, View, TouchableOpacity} from 'react-native';
import Basket from './Basket';
import {Icon} from 'react-native-elements';

const HeaderButtons = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('basket');
  };
  return (
    <View
      style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
      <Basket onBasketClick={handleBasketClick} />
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" type="font-awesome" color="#033649" />
      </TouchableOpacity>

      {/* <Button onPress={() => navigation.toggleDrawer()} title="Menu"></Button> */}
    </View>
  );
};

export default HeaderButtons;
