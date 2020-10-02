import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './../screens/Login';
import Welcome from './../screens/Welcome';
import Register from './../screens/Register';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import {connect} from 'react-redux';
import {Text, Button} from 'react-native';
import HeaderButtons from './../components/HeaderButtons';
import BasketList from './../screens/BasketList';

const Stack = createStackNavigator();

const AppNavigation = ({isLogged}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogged ? (
            <>
              <Stack.Screen name="welcome" component={Welcome} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
            </>
          ) : (
            <>
              {/*  <Stack.Screen
                name="products"
                component={Products}
                options={{
                  headerTitle: 'Products',
                  headerRight: () => <HeaderButtons />,
                }}
              /> */}
              {/* <Stack.Screen
                name="detail"
                component={ProductDetail}
                options={{
                  headerTitle: 'Detalle',
                  headerRight: () => <HeaderButtons />,
                }}
              /> */}
              <Stack.Screen
                name="basket"
                component={BasketList}
                options={{
                  headerTitle: 'Cesta',
                  headerRight: () => <HeaderButtons />,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.userLogged.isLogged || false,
});

export default connect(mapStateToProps)(React.memo(AppNavigation));
