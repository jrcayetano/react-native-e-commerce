import {StyleSheet} from 'react-native';
import colorsApp from './../styles/Colors';
import fontsApp from './../styles/Fonts';

export const orderItemStyle = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  imageContainer: {
    marginRight: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: '5%',
  },
  name: {
    fontSize: 15,
    color: '#007bff',
  },
  date: {
    color: '#555',
    fontSize: 13,
  },
  price: {
    color: 'red',
    fontSize: 18,
    fontWeight: fontsApp.FONT_MEDIUM,
  },
});
