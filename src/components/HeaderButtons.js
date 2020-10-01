import React from 'react';
import {Button, View} from 'react-native';

const HeaderButtons = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Button
        onPress={() => alert('This is a button!')}
        title="basket"></Button>
      <Button onPress={() => alert('This is a button!')} title="Menu"></Button>
    </View>
  );
};

export default HeaderButtons;
