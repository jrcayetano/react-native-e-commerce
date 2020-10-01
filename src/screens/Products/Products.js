import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {productsPageStyle} from './../../styles/Products.style';
import {getProductList} from './../../services/Product.service';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductList().then((response) => setProducts(response.data));
  }, []);

  const handleProductPress = () => {};

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={productsPageStyle.touchable}
      onPress={handleProductPress}>
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
    </SafeAreaView>
  );
};

export default Products;
