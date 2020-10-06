import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from 'react-native';
import BasketListProduct from './BasketListProduct';
import {ClearBasket} from './../../state/actions/BasketActions';
import {createOrder, generateOrder} from './../../services/Orders.service';

const BasketList = ({basketList, isUserLogged, userLoggedData}) => {
  const [subtotal, setSubtotal] = useState(0);
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    calculateSubtotal();
  }, [basketList]);

  const calculateSubtotal = () => {
    const total = basketList
      .map((product) =>
        product.isOffer
          ? product.priceOffer * product.quantity
          : product.price * product.quantity,
      )
      .reduce((product1, product2) => product1 + product2, 0);
    setListData([{title: total, data: [...basketList]}]);
    setSubtotal(total);
  };

  const handleBuy = () => {
    if (!isUserLogged) {
      return;
    }
    const order = generateOrder(basketList, subtotal, userLoggedData);
    createOrder(order)
      .then((response) => {
        if (response && response.data) {
          dispatch(ClearBasket());
        }
      })
      .catch((error) => console.error(error));
  };

  const handleRenderItem = (item) => {
    return <BasketListProduct item={item} />;
  };

  const renderSeparator = () => {
    return <View style={{borderWidth: 1, borderColor: '#efefef'}}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={listData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => handleRenderItem(item)}
        ItemSeparatorComponent={renderSeparator}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>Subtotal: {subtotal}</Text>
        )}
      />
      <Button title="Finalizar compra" onPress={handleBuy} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  basketList: state.basket.productsList,
  isUserLogged: state.userLogged.isLogged,
  userLoggedData: state.userLogged.profile,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    // marginHorizontal: 16,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#ffc107',
    color: 'white',
    paddingLeft: '5%',
  },
  title: {
    fontSize: 24,
  },
});

export default connect(mapStateToProps)(React.memo(BasketList));
