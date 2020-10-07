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
import {Text, Button, View, ImageBackground, StyleSheet} from 'react-native';
import HeaderButtons from './../components/HeaderButtons';
import BasketList from './../screens/BasketList';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent,
} from '@react-navigation/drawer';
import ProfileInfo from './../components/ProfileInfo';
import {logout} from './../state/actions/RootActions';
import {Icon} from 'react-native-elements';
import {MenuEnum} from './../consts/MenuEnum';
import {setMenu} from './../state/actions/AppActions';

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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="detail"
        component={ProductDetail}
        options={({navigation, route}) => ({
          headerTitle: 'Detalle',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="offers"
        component={Offers}
        initialParams={{isOffer: true}}
        options={({navigation, route}) => ({
          headerTitle: 'Offers',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="detail"
        component={ProductDetail}
        options={({navigation, route}) => ({
          headerTitle: 'Detalle',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="basket"
        component={BasketList}
        options={({navigation, route}) => ({
          headerTitle: 'Cesta',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
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
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}></Stack.Screen>
      <Stack.Screen
        name="orders"
        component={Orders}
        options={({navigation, route}) => ({
          headerTitle: 'Orders',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}></Stack.Screen>
      <Stack.Screen
        name="favorite"
        component={Favorite}
        options={({navigation, route}) => ({
          headerTitle: 'Favoritos',
          headerBackground: () => (
            <ImageBackground
              source={require('./../assets/images/bg.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          headerRight: () => <HeaderButtons navigation={navigation} />,
        })}></Stack.Screen>
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  console.log('Menu actual', props.currentMenu);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>
      <View>
        <ProfileInfo />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4f647d',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Mi Perfil</Text>
        </View>
        <View>
          <DrawerItem
            style={[
              props.currentMenu === MenuEnum.EDIT_PROFILE
                ? styles.active
                : null,
            ]}
            label="Editar cuenta"
            icon={({focused, color, size}) => (
              <Icon name="user" type="font-awesome" color="#555" size={20} />
            )}
            onPress={() => {
              props.dispatch(setMenu(MenuEnum.EDIT_PROFILE));
              props.navigation.navigate('editProfile');
            }}
          />
          <DrawerItem
            style={[
              props.currentMenu === MenuEnum.FAVORITES ? styles.active : null,
            ]}
            label="Productos favoritos"
            icon={({focused, color, size}) => (
              <Icon name="star" type="font-awesome" color="#555" size={20} />
            )}
            onPress={() => {
              props.dispatch(setMenu(MenuEnum.FAVORITES));
              props.navigation.navigate('favorite');
            }}
          />
          <DrawerItem
            style={[
              props.currentMenu === MenuEnum.ORDERS ? styles.active : null,
            ]}
            label="Pedidos"
            icon={({focused, color, size}) => (
              <Icon name="cubes" type="font-awesome" color="#555" size={20} />
            )}
            onPress={() => {
              props.dispatch(setMenu(MenuEnum.ORDERS));
              props.navigation.navigate('orders');
            }}
          />
        </View>
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
          {/* Se comenta para hacerlo todo con Drawer Item y poder adaptar el menu al estilo que quiero  <DrawerItemList {...props} /> */}
          <DrawerItem
            style={[
              props.currentMenu === MenuEnum.PRODUCTS ? styles.active : null,
            ]}
            label="Productos"
            icon={({focused, color, size}) => (
              <Icon name="cube" type="font-awesome" color="#555" size={20} />
            )}
            onPress={() => {
              props.dispatch(setMenu(MenuEnum.PRODUCTS));
              props.navigation.navigate('products');
            }}
          />
          <DrawerItem
            style={[
              props.currentMenu === MenuEnum.OFFERS ? styles.active : null,
            ]}
            label="Ofertas"
            icon={({focused, color, size}) => (
              <Icon name="percent" type="font-awesome" color="#555" size={20} />
            )}
            onPress={() => {
              props.dispatch(setMenu(MenuEnum.OFFERS));
              props.navigation.navigate('offers');
            }}
          />
        </View>
      </View>

      <View style={{backgroundColor: '#232f3e', color: 'white'}}>
        <DrawerItem
          activeTintColor={'white'}
          inactiveTintColor={'white'}
          icon={({focused, color, size}) => (
            <Icon
              name="power-off"
              type="font-awesome"
              color="white"
              size={20}
            />
          )}
          label="Logout"
          onPress={() => {
            props.dispatch(setMenu(MenuEnum.PRODUCTS));
            props.dispatch(logout());
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const AppNavigation = ({isLogged, currentMenu}) => {
  const dispatch = useDispatch();
  return (
    <>
      <NavigationContainer>
        {isLogged ? (
          <Drawer.Navigator
            drawerContent={(props) => (
              <CustomDrawerContent
                {...props}
                dispatch={dispatch}
                currentMenu={currentMenu}
              />
            )}
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: {marginVertical: 30},
            }}>
            <>
              <Drawer.Screen
                name="products"
                component={ProductStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Productos',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="offers"
                component={OffersStack}
                initialParams={{isOffer: true}}
                options={({navigation, route}) => ({
                  headerTitle: 'Ofertas',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="editProfile"
                component={editProfileStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Editar perfil',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="orders"
                component={orderStack}
                options={({navigation, route}) => ({
                  headerTitle: 'Pedidos',
                  headerRight: () => <HeaderButtons navigation={navigation} />,
                })}
              />
              <Drawer.Screen
                name="favorite"
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
            <Stack.Screen
              name="login"
              component={Login}
              options={({navigation, route}) => ({
                headerTitle: 'Login',
              })}></Stack.Screen>

            <Stack.Screen
              name="register"
              component={Register}
              options={({navigation, route}) => ({
                headerTitle: 'Registro',
              })}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  active: {
    height: 40,
    backgroundColor: 'rgba(255,165,0, 0.7)',
    borderRadius: 5,
  },
  textActive: {
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  isLogged: state.userLogged.isLogged || false,
  currentMenu: state.app.selectedMenu,
});

export default connect(mapStateToProps)(React.memo(AppNavigation));
