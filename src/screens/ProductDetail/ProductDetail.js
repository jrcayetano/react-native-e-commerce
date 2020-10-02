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
import {connect, useDispatch} from 'react-redux';
import {
  AddProduct,
  IncremenProductQuantity,
} from './../../state/actions/BasketActions';
import {AddFavoriteProduct} from './../../state/actions/UserLoggedActions';

const ProductDetail = ({route, basketProductsList}) => {
  const [id, setId] = useState();
  const [product, setProduct] = useState({reviews: [], extraInformation: []});
  const dispatch = useDispatch();

  const foundProductInBasket = (product) => {
    return basketProductsList.find((prod) => prod.id === product.id);
  };

  useEffect(() => {
    /* route.params.id */
    setId('7');
    getById('7').then(
      (response) => {
        console.log('response', response.data);
        setProduct(response.data);
      },
      () => console.log(product),
    );
  }, []);

  const handleAddToBasket = () => {
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

  const haddleAddToFavorite = () => {
    dispatch(AddFavoriteProduct(product));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={productDetailStyle.container}>
          <ProductDetailInformation product={product} />
          <View style={productDetailStyle.actionButtons}>
            <Button
              color={'#ffc107'}
              style={generalStyles.btnPrimary}
              title="Añadir a la cesta"
              onPress={handleAddToBasket}></Button>
            <Button
              color={'#6c757d'}
              style={generalStyles.btnSecondary}
              title="Añadir a favoritos"
              onPress={haddleAddToFavorite}></Button>
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

const mapStateToProps = (state) => ({
  basketProductsList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(ProductDetail));
