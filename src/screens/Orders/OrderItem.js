import React from 'react';
import {View, Text, Image} from 'react-native';
import {orderItemStyle} from '../../styles/OrderItem.style';
import {generalStyles} from './../../styles/General.style';

const OrderItem = ({product}) => {
  return (
    <View
      style={[
        generalStyles.flexRow,
        generalStyles.vAlignRowCenter,
        orderItemStyle.item,
      ]}>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <View style={orderItemStyle.imageContainer}>
        <Image
          style={orderItemStyle.image}
          resizeMode="contain"
          source={{uri: product.image}}
        />
      </View>
      <View style={orderItemStyle.imageContainer}>
        <Text style={orderItemStyle.name}>{product?.name}</Text>

        <Text style={orderItemStyle.price}>{product?.price} €</Text>
        <Text>
          <Text>{product?.orderDelivery}</Text>
        </Text>
        <Text style={orderItemStyle.date}>
          Realizado el {product?.delivery}
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;
