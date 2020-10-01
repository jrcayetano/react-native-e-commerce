import React from 'react';
import {View, Text, Image} from 'react-native';
import {productCardStyle} from './../../styles/ProductCard.style';
import {generalStyles} from './../../styles/General.style';
import Rating from './Rating';
const ProductCard = ({product}) => {
  const elipsis = (text) => {
    if (text) {
      const n = 100;
      return text.length > n ? text.substr(0, n - 1) + '...' : text;
    }
    return text;
  };

  return (
    <View style={productCardStyle.productCard}>
      <View style={productCardStyle.badge}>
        {product?.mostseller && (
          <View>
            <Text style={productCardStyle.mostSeller}>Más vendido</Text>
          </View>
        )}
      </View>
      <View style={[productCardStyle.imageContainer, productCardStyle.spacing]}>
        <Image
          style={[productCardStyle.image, productCardStyle.tinyLogo]}
          source={require('./no-image.png')}
        />
      </View>
      <View style={productCardStyle.info}>
        <View style={productCardStyle.spacing}>
          <Text style={productCardStyle.title}>{elipsis(product?.name)}</Text>
        </View>
        <View style={productCardStyle.spacing}>
          <Text style={productCardStyle.description}>
            {product?.description}
          </Text>
        </View>
        <View
          style={[
            productCardStyle.rating,
            productCardStyle.spacing,
            generalStyles.labeledField,
          ]}>
          <Rating rating={product.rating} />
          <View>
            <Text style={[productCardStyle.reviews, {marginLeft: 10}]}>
              {product?.reviews.length}
            </Text>
          </View>
        </View>
        <View>
          <Text style={productCardStyle.price}>{product?.price} €</Text>
        </View>
        <View>
          <Text style={productCardStyle.delivery}>
            Recibelo el{' '}
            <Text style={productCardStyle.strong}>{product?.delivery}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
