import React from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#007bff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
