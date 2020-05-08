import React from 'react';
import { Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { CapsulesScreen } from './screens/CapsulesScreen/CapsulesScreen';

const Stack = createStackNavigator();

export const App: React.FC<{}> = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: 'pink'
        // },
        // headerTintColor: '#fff',

        // headerTitleStyle: {
        //   fontWeight: 'bold'
        // }
        // headerLeft: () => (<Button title="OK" />),
        // headerBackTitle: "ok",
        headerTitle: props => (
          <Image
            style={{ height: 50, width: 50 }}
            source={require('./testproject.android.png')}
          />
        )
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title='info'
          //     color='green'
          //   />
          // )
        }}
        initialParams={{ itemId: 42 }}
      />
      <Stack.Screen
        name="Capsules"
        component={CapsulesScreen}
        initialParams={{ parameter: 110 }}
        options={({ route }) => ({
          title: route.params.parameter,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
