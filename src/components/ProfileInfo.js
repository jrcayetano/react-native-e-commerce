import React from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {connect, useDispatch} from 'react-redux';

const ProfileInfo = ({username}) => {
  console.log(username);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <ImageBackground
        containerStyle={{flexDirection: 'row'}}
        source={require('./../assets/images/bg.jpg')}
        style={styles.image}>
        <Avatar
          size={70}
          rounded
          title={username ? username.slice(0, 2).toUpperCase() : ''}
          activeOpacity={0.7}
          containerStyle={{backgroundColor: '#555'}}
        />
        <Text style={[styles.text]}>{username}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#555',
    fontSize: 30,
    fontWeight: 'bold',
    fontWeight: '800',
    fontSize: 22,
    paddingLeft: 10,
    // marginLeft: 20,
  },
});

const mapStateToProps = (state) => ({
  username: state.userLogged.username,
});

export default connect(mapStateToProps)(React.memo(ProfileInfo));
