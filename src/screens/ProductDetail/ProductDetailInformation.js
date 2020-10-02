import React, {useEffect, useState} from 'react';
import {Button, TextInput, Text, View, Switch, Image} from 'react-native';
import Rating from './../Products/Rating';
import {generalStyles} from './../../styles/General.style';
import {productDetailInformationStyle} from './../../styles/ProductDetailInformation';

const ProductDetailInformation = ({product}) => {
  return (
    <View>
      <View style={productDetailInformationStyle.containerImage}>
        <Image
          resizeMode="contain"
          style={productDetailInformationStyle.imageDetail}
          source={{uri: product?.image}}
        />
      </View>
      <View>
        <Text style={productDetailInformationStyle.detailName}>
          {product?.name}
        </Text>
      </View>
      <View
        style={[
          productDetailInformationStyle.ratingContainer,
          {flexDirection: 'row'},
        ]}>
        <Rating rating={product?.rating} />
        <Text style={productDetailInformationStyle.reviews}>
          {product?.reviews?.length}
        </Text>
      </View>
      <View style={productDetailInformationStyle.extraInformationContainer}>
        {product?.extraInformation.map((info, index) => (
          <View style={{flexDirection: 'row'}} key={`info_${index}`}>
            <Text>{'\u2022'}</Text>
            <Text style={productDetailInformationStyle.extraInfoText}>
              {info}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductDetailInformation;
