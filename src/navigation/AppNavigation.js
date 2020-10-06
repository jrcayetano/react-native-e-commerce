import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './../screens/Login';
import Welcome from './../screens/Welcome';
import Register from './../screens/Register';
import Products from '../screens/Products';
import Offers from '../screens/Offers';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Profile from './../screens/Profile';
import Orders from './../screens/Orders';
import Favorite from './../screens/Favorite';
import {connect, useDispatch} from 'react-redux';
import {Text, Button, View} from 'react-native';
import HeaderButtons from './../components/HeaderButtons';
import BasketList from './../screens/BasketList';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {logout} from './../state/actions/RootActions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="products"
        component={Products}
        options={({navigation, route}) => ({
          headerTitle: 'Productos',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="detail"
        component={ProductDetail}
        options={({navigation, route}) => ({
          headerTitle: 'Detalle',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="offers"
        component={Offers}
        initialParams={{isOffer: true}}
        options={({navigation, route}) => ({
          headerTitle: 'Offers',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const OffersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="offers"
        component={Offers}
        initialParams={{isOffer: true}}
        options={({navigation, route}) => ({
          headerTitle: 'Ofertas',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="detail"
        component={ProductDetail}
        options={({navigation, route}) => ({
          headerTitle: 'Detalle',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const editProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="editProfile"
        component={UserLoggedNav}
        options={({navigation, route}) => ({
          headerTitle: 'Editar perfil',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const orderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="orders"
        component={Orders}
        options={({navigation, route}) => ({
          headerTitle: 'Pedidos',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const favoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Productos favoritos"
        component={Favorite}
        options={({navigation, route}) => ({
          headerTitle: 'Favoritos',
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const UserLoggedNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="editProfile"
        component={Profile}
        options={({navigation, route}) => ({
          headerTitle: 'Editar perfil',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}></Stack.Screen>
      <Stack.Screen
        name="orders"
        component={Orders}
        options={({navigation, route}) => ({
          headerTitle: 'Orders',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}></Stack.Screen>
      <Stack.Screen
        name="favorite"
        component={Favorite}
        options={({navigation, route}) => ({
          headerTitle: 'Favoritos',
          headerRight: ({navigation}) => (
            <HeaderButtons navigation={navigation} />
          ),
        })}></Stack.Screen>
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>
      <View style={{flex: 1}}>
        {/* <View
          style={{
            backgroundColor: '#4f647d',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Mi Perfil</Text>
        </View> */}
        {/*   <View>
          <DrawerItem
            label="Editar cuenta"
            onPress={() => props.navigation.navigate('basket')}
          />
          <DrawerItem
            label="Productos favoritos"
            onPress={() => props.navigation.navigate('basket')}
          />
          <DrawerItem
            label="Pedidos"
            onPress={() => props.navigation.navigate('basket')}
          />
        </View> */}
        <View
          style={{
            backgroundColor: '#4f647d',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Tienda</Text>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </View>

      <View style={{backgroundColor: '#232f3e', color: 'white'}}>
        <DrawerItem
          activeTintColor={'white'}
          inactiveTintColor={'white'}
          label="Logout"
          onPress={() => props.dispatch(logout())}
        />
      </View>
    </DrawerContentScrollView>
  );
};

/**
 * 
 * <Drawer.Screen
              name="editProfile"
              component={EditProfile}
              options={({navigation, route}) => ({
                headerTitle: 'Editar perfil',
                headerRight: ({navigation}) => (
                  <HeaderButtons navigation={navigation} />
                ),
              })}
            />
 */

const AppNavigation = ({isLogged}) => {
  const dispatch = useDispatch();
  return (
    <>
      <NavigationContainer>
        {isLogged ? (
          <Drawer.Navigator
            drawerContent={(props) => (
              <CustomDrawerContent {...props} dispatch={dispatch} />
            )}>
            <>
              <Drawer.Screen
                name="Productos"
                component={ProductStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Productos',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="Ofertas"
                component={OffersStack}
                initialParams={{isOffer: true}}
                options={({navigation, route}) => ({
                  headerTitle: 'Ofertas',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="Editar perfil"
                component={editProfileStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Editar perfil',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="Pedidos"
                component={orderStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Pedidos',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="Productos favoritos"
                component={favoriteStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Favoritos',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
            </>
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={({navigation, route}) => ({
                headerShown: false,
              })}></Stack.Screen>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.userLogged.isLogged || false,
});

export default connect(mapStateToProps)(React.memo(AppNavigation));
