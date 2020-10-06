import React from 'react';
import {Button, View, TouchableOpacity} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';

const ProfileInfo = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('basket');
  };
  return (
    <View>
      <Avatar rounded title="MD" />
    </View>
  );
};

export default ProfileInfo;
