import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderItem from './OrderItem';
import {getOrders} from './../../services/User.service';
import {ordersStyle} from './../../styles/Orders.style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((response) => {
      const formatedData = adaptToList(response.data);
      console.log('formatedData', formatedData);
      setOrders(formatedData);
    });
  }, []);

  const renderItem = ({item}) => {
    return <OrderItem product={item} />;
  };

  const adaptToList = (list) => {
    return list.flatMap((order) => {
      order.products = order.products.map((product) => {
        product['orderDelivery'] = order.delivery.status;
        return product;
      });
      return order.products;
    });
  };

  const renderSeparator = () => {
    return <View style={{borderWidth: 1, borderColor: '#efefef'}}></View>;
  };

  return (
    <SafeAreaView style={ordersStyle.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => '' + item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default Orders;
