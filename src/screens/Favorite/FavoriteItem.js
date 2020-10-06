import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {orderItemStyle} from '../../styles/OrderItem.style';
import {generalStyles} from './../../styles/General.style';

const FavoriteItem = ({product, onDelete, onBuy}) => {
  const elipsis = (text) => {
    if (text) {
      const n = 30;
      return text.length > n ? text.substr(0, n - 1) + '...' : text;
    }
    return text;
  };
  return (
    <View
      style={[
        generalStyles.flexRow,
        generalStyles.vAlignRowCenter,
        orderItemStyle.item,
      ]}>
      <View style={orderItemStyle.imageContainer}>
        <Image
          style={orderItemStyle.image}
          resizeMode="contain"
          source={{uri: product.image}}
        />
      </View>
      <View style={orderItemStyle.infoContainer}>
        <Text style={orderItemStyle.name}>{elipsis(product?.name)}</Text>
        <Text style={orderItemStyle.price}>{product?.price} €</Text>
        <View style={generalStyles.flexRow}>
          <View>
            <Button
              color={'#ffc107'}
              style={generalStyles.btnPrimary}
              title="Añadir a la cesta"
              onPress={() => onBuy(product)}></Button>
          </View>
          <View style={{marginLeft: 20}}>
            <Button
              title="Eliminar"
              color="red"
              onPress={() => onDelete(product)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavoriteItem;
