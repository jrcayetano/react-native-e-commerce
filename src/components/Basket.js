import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';

const Basket = ({onBasketClick, productList}) => {
  return (
    <TouchableOpacity
      onPress={onBasketClick}
      style={{
        backgroundColor: '#ffc107',
        borderRadius: 5,
        marginRight: 20,
        padding: 10,
        height: 40,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // marginRight: 20,
          textAlign: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="shopping-cart"
            type="font-awesome"
            color="#033649"
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 18}}>{productList?.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  productList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Basket));
