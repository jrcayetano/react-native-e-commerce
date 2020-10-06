import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderItem from './OrderItem';
import {getOrders} from './../../services/User.service';
import {ordersStyle} from './../../styles/Orders.style';
import Loading from './../../components/Loading';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOrders()
      .finally(() => setIsLoading(false))
      .then((response) => {
        const formatedData = adaptToList(response.data);
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
      {isLoading && <Loading />}
      {!isLoading && (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => '' + item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </SafeAreaView>
  );
};

export default Orders;
