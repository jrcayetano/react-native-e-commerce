import React, {useEffect, useState} from 'react';
import {Button, TextInput, Text, View, Switch, Image} from 'react-native';
import Rating from './../Products/Rating';
import {productDetailreviewStyle} from './../../styles/ProductDetailReview.style';

const ProductDetailReview = ({review}) => {
  return (
    <View
      style={{
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Image
          style={productDetailreviewStyle.imageReview}
          resizeMode={'contain'}
          source={require('./../../assets/images/default_user.png')}
        />
        <Text style={{marginLeft: 20}}>{review?.user?.name}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Rating rating={review?.rating} />
        <Text style={productDetailreviewStyle.title}>{review?.title}</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={productDetailreviewStyle.reviewDate}>
          Revisado en españa el {review?.date}
        </Text>
      </View>
      <View>
        <Text style={{fontWeight: '400'}}>{review?.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetailReview;
