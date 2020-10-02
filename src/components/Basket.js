import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

const Basket = ({navigation, productList}) => {
  const handleBasketClick = () => {
    navigation.navigate('basket');
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffc107',
        borderRadius: 5,
        marginRight: 20,
        padding: 10,
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
          <Text style={{marginRight: 5}}>B</Text>
          <Text>{productList?.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  productList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Basket));
