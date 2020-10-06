import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Item,
  Image,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  DeleteProduct,
  IncremenProductQuantity,
} from './../../state/actions/BasketActions';

const BasketListProduct = ({item}) => {
  const quantitiesOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useDispatch();

  const handletChangeQuantity = (quantity) => {
    dispatch(
      IncremenProductQuantity({
        productId: item.id,
        quantity: parseInt(quantity),
      }),
    );
  };

  const handleOndDeleteClick = () => {
    dispatch(DeleteProduct(item.id));
  };

  return (
    <View style={{padding: '5%'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 100}}
          resizeMode={'contain'}
          source={{uri: item.image}}></Image>
        <View style={{paddingLeft: 20, flex: 1}}>
          <Text>{item.name}</Text>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'red'}}>
            EUR {item.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '20%'}}>
          <Picker
            selectedValue={item.quantity}
            onValueChange={(itemValue) => {
              handletChangeQuantity(itemValue);
            }}>
            {quantitiesOptions.map((quantity, index) => (
              <Picker.Item
                label={`${quantity}`}
                value={quantity}
                key={`picker_${index}`}
              />
            ))}
          </Picker>
        </View>
        <View>
          <Button title="Eliminar" color="red" onPress={handleOndDeleteClick} />
        </View>
      </View>
    </View>
  );
};

export default BasketListProduct;
