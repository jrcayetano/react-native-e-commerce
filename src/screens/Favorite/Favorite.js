import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import FavoriteItem from './FavoriteItem';
import {ordersStyle} from './../../styles/Orders.style';
import {getFavorites} from './../../services/User.service';
import {AddFavoriteProductInBulk} from './../../state/actions/UserLoggedActions';
import {
  AddProduct,
  IncremenProductQuantity,
} from './../../state/actions/BasketActions';
import {DeleteFavoriteProduct} from './../../state/actions/UserLoggedActions';
import {generalStyles} from './../../styles/General.style';

const Favorite = ({favoriteList, basketProductsList}) => {
  const dispatch = useDispatch();
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    getFavorites().then((response) => {
      console.log('filter products', response.data);
      setFilterProduct(response.data);
      dispatch(AddFavoriteProductInBulk(response.data));
    });
  }, []);

  useEffect(() => {
    setFilterProduct(favoriteList);
  }, [favoriteList]);

  const handleDeleteFavorite = (product) => {
    dispatch(DeleteFavoriteProduct(product.id));
  };

  const handleBuy = (product) => {
    const foundProduct = foundProductInBasket(product);
    if (foundProduct) {
      dispatch(
        IncremenProductQuantity({
          productId: product.id,
          quantity: foundProduct.quantity + 1,
        }),
      );
    } else {
      dispatch(AddProduct(product));
    }
  };

  const foundProductInBasket = (product) => {
    return basketProductsList.find((prod) => prod.id === product.id);
  };

  const handleFilterProduct = (searchTerm) => {
    const productFiltered = favoriteList.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilterProduct(productFiltered);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <FavoriteItem
          product={item}
          onDelete={handleDeleteFavorite}
          onBuy={handleBuy}
        />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={{borderWidth: 1, borderColor: '#efefef'}}></View>;
  };

  const handleSearch = () => {};

  return (
    <SafeAreaView style={ordersStyle.container}>
      <TextInput
        style={[
          generalStyles.input,
          {width: '80%', alignSelf: 'center', marginTop: 20, marginBottom: 10},
        ]}
        placeholder="Filtrado"
        onChangeText={(evnt) => handleFilterProduct(evnt)}
      />
      <FlatList
        data={filterProduct}
        renderItem={renderItem}
        keyExtractor={(item, index) => `index_${index}_` + item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  favoriteList: state.userLogged.favoriteProducts,
  basketProductsList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Favorite));
