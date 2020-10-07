import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import colorsApp from './../../styles/Colors';

const Rating = ({rating}) => {
  const STARS_NUMBER = [1, 2, 3, 4, 5];

  const [numberPart, setNumberPart] = useState(0);
  const [decimalPart, setDecimalPart] = useState(0);

  const calculateRating = (rating) => {
    if (!rating || Number.isNaN(rating)) {
      return;
    }
    setNumberPart(Math.floor(rating));
    setDecimalPart(rating - numberPart);
  };

  useEffect(() => {
    calculateRating(rating);
  });

  return (
    <View style={{flexDirection: 'row'}}>
      {STARS_NUMBER.map(
        (star, index) =>
          index < numberPart && (
            <Icon
              name="star"
              color={colorsApp.COLOR_STAR}
              type="font-awesome"
              key={`star_${index}`}
            />
          ),
      )}
      {decimalPart > 0 && (
        <Icon
          name="star-half"
          color={colorsApp.COLOR_STAR}
          type="font-awesome"
        />
      )}
    </View>
  );
};

export default React.memo(Rating);
