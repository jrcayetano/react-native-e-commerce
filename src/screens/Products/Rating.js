import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

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
            <Text style={{marginRight: 3}} key={`star_${index}`}>
              S
            </Text>
          ),
      )}
      {decimalPart > 0 && <Text>H</Text>}
    </View>
  );
};

export default React.memo(Rating);
