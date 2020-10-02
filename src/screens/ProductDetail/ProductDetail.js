import React, {useEffect, useState} from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {getById} from './../../services/Product.service';
import ProductDetailInformation from './ProductDetailInformation';
import ProductDetailReview from './ProductDetailReviews';
import {productDetailStyle} from './../../styles/ProductDetail';
import {generalStyles} from './../../styles/General.style';

const ProductDetail = ({route}) => {
  const [id, setId] = useState();
  const [product, setProduct] = useState({reviews: [], extraInformation: []});
  useEffect(() => {
    /* route.params.id */
    setId('1');
    getById('1').then(
      (response) => {
        console.log('response', response.data);
        setProduct(response.data);
      },
      () => console.log(product),
    );
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={productDetailStyle.container}>
          <ProductDetailInformation product={product} />
          <View style={productDetailStyle.actionButtons}>
            <Button
              color={'#ffc107'}
              style={generalStyles.btnPrimary}
              title="Añadir a la cesta"></Button>
            <Button
              color={'#6c757d'}
              style={generalStyles.btnSecondary}
              title="Añadir a favoritos"></Button>
          </View>
          <View
            style={{
              marginTop: 20,
              borderTopWidth: 1,
              borderColor: '#efefef',
            }}>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontWeight: '500',
                fontSize: 20,
              }}>
              Principales reseñas de España
            </Text>
            {product &&
              product?.reviews.map((info, index) => (
                <ProductDetailReview review={info} key={`info2_${index}`} />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
