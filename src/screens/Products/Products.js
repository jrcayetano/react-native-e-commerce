import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {productsPageStyle} from './../../styles/Products.style';
import {getProductList} from './../../services/Product.service';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from './ProductCard';
import FAB from './../../components/FAB';
import ProductFilter from './ProductFilter';
import Loading from './../../components/Loading';

const Products = ({navigation, route}) => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isOffer = false;

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

  const handleProductPress = (productId) => {
    navigation.navigate('detail', {id: productId});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={productsPageStyle.touchable}
      onPress={() => handleProductPress(item.id)}>
      <ProductCard style={productsPageStyle.container} product={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={productsPageStyle.container}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <FlatList
            contentContainerStyle={productsPageStyle.listContainer}
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

export default Products;
