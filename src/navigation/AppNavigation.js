import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './../screens/Login';
import Welcome from './../screens/Welcome';
import Register from './../screens/Register';
import Products from '../screens/Products';
import {connect} from 'react-redux';
import {Text, Button} from 'react-native';
import HeaderButtons from './../components/HeaderButtons';

const Stack = createStackNavigator();

const AppNavigation = ({isLogged}) => {
  return (
    <>
      <Text>User is Logged: {isLogged ? 'TRUE' : 'FALSE'}</Text>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogged ? (
            <>
              <Stack.Screen name="welcome" component={Welcome} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
            </>
          ) : (
            <Stack.Screen
              name="products"
              component={Products}
              options={{
                headerTitle: 'Products',
                headerRight: () => <HeaderButtons />,
              }}
            />
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
