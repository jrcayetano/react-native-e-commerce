import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {connect, useDispatch} from 'react-redux';

const ProfileInfo = ({username}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Avatar
        size={70}
        rounded
        title={username.slice(0, 2).toUpperCase()}
        activeOpacity={0.7}
        containerStyle={{backgroundColor: '#EBEDF0'}}
      />
      <Text style={{marginLeft: 20}}>{username}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  username: state.userLogged.profile.username,
});

export default connect(mapStateToProps)(React.memo(ProfileInfo));
