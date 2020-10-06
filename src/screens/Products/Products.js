import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {productsPageStyle} from './../../styles/Products.style';
import {getProductList} from './../../services/Product.service';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from './ProductCard';
import FAB from './../../components/FAB';
import ProductFilter from './ProductFilter';

const Products = ({navigation, route}) => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const isOffer = false;

  useEffect(() => {
    getProductList(null, isOffer).then((response) =>
      setProducts(response.data),
    );
  }, []);

  const handleFilter = (filter) => {
    setShowModal(!showModal);
    getProductList(filter, isOffer).then((response) =>
      setProducts(response.data),
    );
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
      <ProductFilter
        showModal={showModal}
        onSubmit={handleFilter}></ProductFilter>
    </SafeAreaView>
  );
};

export default Products;
