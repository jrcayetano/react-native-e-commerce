import React from 'react';
import {Text, View, Stylesheet, Image, Button} from 'react-native';
import {productOfferCardStyle} from '../../styles/ProductOfferCard.style';
import {generalStyles} from '../../styles/General.style';
import Rating from '../Products/Rating';

const ProductOfferCard = ({product, onAddToBasket}) => {
  const elipsis = (text) => {
    if (text) {
      const n = 30;
      return text.length > n ? text.substr(0, n - 1) + '...' : text;
    }
    return text;
  };

  return (
    <View style={productOfferCardStyle.productCard}>
      <View
        style={[
          productOfferCardStyle.imageContainer,
          productOfferCardStyle.spacing,
        ]}>
        <Image
          resizeMode={'contain'}
          style={[productOfferCardStyle.image, productOfferCardStyle.tinyLogo]}
          source={{uri: product.image}}
        />
      </View>
      <View style={productOfferCardStyle.badge}>
        <View>
          <Text style={productOfferCardStyle.offerBadge}>OFERTA DEL DIA</Text>
        </View>
      </View>
      <View style={productOfferCardStyle.info}>
        <View style={productOfferCardStyle.spacing}>
          <Text style={productOfferCardStyle.priceOffer}>
            {product?.priceOffer} €
          </Text>
        </View>
        <View
          style={[
            productOfferCardStyle.spacing,
            productOfferCardStyle.priceContainer,
          ]}>
          <Text style={productOfferCardStyle.price}>
            Precio: {product?.price} €
          </Text>
          <Text>
            (-
            {product.discount}%)
          </Text>
        </View>

        <View style={productOfferCardStyle.spacing}>
          <Text style={productOfferCardStyle.timer}>Quedan 10 min</Text>
        </View>
        <View style={productOfferCardStyle.spacing}>
          <Text style={productOfferCardStyle.title}>
            {elipsis(product?.name)}
          </Text>
          <Text style={productOfferCardStyle.sellerAndSentBy}>
            Vendido y enviaado por {product?.seller?.name}
          </Text>
        </View>
        <View
          style={[
            productOfferCardStyle.rating,
            productOfferCardStyle.spacing,
            {alignItems: 'center'},
          ]}>
          <Rating rating={product.rating} />
          <View>
            <Text
              style={[
                productOfferCardStyle.reviews,
                {marginLeft: 10, fontSize: 20, color: '#007bff'},
              ]}>
              {product?.reviews.length}
            </Text>
          </View>
        </View>
        <Button
          color={'#ffc107'}
          style={generalStyles.btnPrimary}
          title="Añadir a la cesta"
          onPress={() => onAddToBasket(product)}></Button>
      </View>
    </View>
  );
};

export default ProductOfferCard;
