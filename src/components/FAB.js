import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const size = 70;

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 1, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: '#2196F3',
  },
  text: {
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const FAB = ({onSearch}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSearch}>
      <Icon name="search" type="font-awesome" color="white" />
    </TouchableOpacity>
  );
};

export default FAB;
