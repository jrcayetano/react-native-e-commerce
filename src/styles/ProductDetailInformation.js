import {StyleSheet} from 'react-native';
import colorsApp from './../styles/Colors';
import fontsApp from './../styles/Fonts';

export const productDetailInformationStyle = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
  },
  imageDetail: {
    width: 200,
    height: 200,
  },
  detailName: {
    fontSize: 19,
    fontWeight: fontsApp.FONT_MEDIUM,
    marginBottom: 10,
  },
  ratingContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colorsApp.COLOR_BORDER,
  },
  extraInformationContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  extraInfoText: {
    paddingLeft: 5,
    fontSize: 13,
    fontWeight: fontsApp.FONT_MEDIUM,
    marginBottom: 10,
  },
  reviews: {
    marginLeft: 10,
  },
});
