import {StyleSheet} from 'react-native';

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  logo: {
    borderBottomWidth: 0.2,
  },
  actionBar: {
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-evenly',
  },
  accessButton: {
    position: 'relative',
    width: '100%',
    margin: 5,
    borderRadius: 50,
    justifyContent: 'space-between',
  },
});
