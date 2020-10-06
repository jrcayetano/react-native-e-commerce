import {StyleSheet} from 'react-native';
import colorsApp from './Colors';
import fontsApp from './Fonts';

export const productDetailreviewStyle = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
  },
  imageReview: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: fontsApp.FONT_BOLD,
    marginLeft: 10,
  },
  reviewDate: {
    color: colorsApp.COLOR_REVIEW_DATE,
  },
});
