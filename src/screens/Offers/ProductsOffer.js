import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {productsPageStyle} from './../../styles/Products.style';
import {getProductList} from './../../services/Product.service';
import {SafeAreaView} from 'react-native-safe-area-context';
import FAB from './../../components/FAB';
import ProductFilter from './../Products/ProductFilter';
import ProductOfferCard from './ProductOfferCard';
import {connect, useDispatch} from 'react-redux';
import {
  AddProduct,
  IncremenProductQuantity,
} from './../../state/actions/BasketActions';
import Loading from './../../components/Loading';

const Offers = ({navigation, route, basketProductsList}) => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const isOffer = true;

  useEffect(() => {
    setIsLoading(true);
    getProductList(null, isOffer)
      .finally(() => setIsLoading(false))
      .then((response) => setProducts(response.data));
  }, []);

  const handleFilter = (filter) => {
    setShowModal(!showModal);
    setIsLoading(true);
    getProductList(filter, isOffer)
      .finally(() => setIsLoading(false))
      .then((response) => setProducts(response.data));
  };

  const hadleSearch = () => {
    setShowModal(!showModal);
  };

  const foundProductInBasket = (product) => {
    return basketProductsList.find((prod) => prod.id === product.id);
  };

  const handleAddBasket = (product) => {
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

  const handleProductPress = (productId) => {
    navigation.navigate('detail', {id: productId});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={productsPageStyle.touchable}
      onPress={() => handleProductPress(item.id)}>
      <ProductOfferCard
        style={productsPageStyle.container}
        product={item}
        onAddToBasket={handleAddBasket}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={productsPageStyle.container}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <FAB
            text="+"
            fabStyle={{backgroundColor: '#0066ff'}}
            textStyle={{color: '#fff'}}
            onSearch={hadleSearch}
          />
          <ProductFilter showModal={showModal} onSubmit={handleFilter} />
        </>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  basketProductsList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Offers));
