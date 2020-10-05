import {StyleSheet} from 'react-native';
import colorsApp from './../styles/Colors';
import fontsApp from './../styles/Fonts';

export const productOfferCardStyle = StyleSheet.create({
  productCard: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    padding: '15%',
  },
  badge: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  offerBadge: {
    fontWeight: fontsApp.FONT_BOLD,
    backgroundColor: '#c45500',
    color: 'white',
    borderRadius: 5,
    padding: 8,
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
    // alignItems: 'center',
  },
  title: {
    fontSize: 15,
    // color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
    color: '#007bff',
    // fontWeight: fontsApp.FONT_BOLD,
    // textAlign: 'center',
  },
  sellerAndSentBy: {
    fontSize: 11,
  },

  rating: {
    flexDirection: 'row',
  },
  reviews: {},
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 15,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  priceOffer: {
    color: 'red',
    fontSize: 21,
    fontWeight: fontsApp.FONT_MEDIUM,
  },
  timer: {
    color: '#555',
    fontSize: 11,
  },

  delivery: {
    fontSize: 14,
    color: colorsApp.COLOR_TEXT_PRODUCT_INFO,
  },
  spacing: {
    marginBottom: 5,
  },
  strong: {
    fontWeight: '700',
  },
});
