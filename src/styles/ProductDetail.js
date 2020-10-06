import {StyleSheet} from 'react-native';
import colorsApp from './../styles/Colors';
import fontsApp from './../styles/Fonts';

export const productDetailStyle = StyleSheet.create({
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: 'white',
    paddingTop: '10%',
    height: '100%',
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
