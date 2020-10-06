import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderItem from './OrderItem';
import {getOrders} from './../../services/User.service';
import {ordersStyle} from './../../styles/Orders.style';

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
