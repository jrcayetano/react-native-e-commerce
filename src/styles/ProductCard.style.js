import {StyleSheet} from 'react-native';
import colorsApp from './../styles/Colors';
import fontsApp from './../styles/Fonts';

export const productCardStyle = StyleSheet.create({
  productCard: {
    backgroundColor: 'white',
    // borderWidth: 0.5,
    width: '100%',
    marginBottom: 10,
    padding: '15%',
  },
  badge: {
    alignItems: 'center',
    marginBottom: 10,
  },
  mostSeller: {
    fontWeight: fontsApp.FONT_BOLD,
    backgroundColor: '#ffc107',
    textAlign: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {},
  info: {
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
    fontWeight: fontsApp.FONT_BOLD,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
    fontWeight: fontsApp.FONT_MEDIUM,
    textAlign: 'center',
  },
  rating: {},
  reviews: {},
  price: {
    fontSize: 21,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
    fontWeight: fontsApp.FONT_MEDIUM,
  },
  delivery: {
    fontSize: 14,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
  },
  spacing: {
    marginBottom: 10,
  },
  strong: {
    fontWeight: '700',
  },
});
