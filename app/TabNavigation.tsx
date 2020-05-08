import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const DetailsScreen = ({ route }) => {
  return (
    <>
      <Text>Details Screen</Text>
      <Text>{route.params.value}</Text>
    </>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings', { name: 'ok' })}
      />
      <Button title="Go to Settins details"
        onPress={() => navigation.navigate('Settings', {
          screen: 'Details',
          value: 'Hii'
        })}

      />
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} initialParams={{ value: "HomeStack" }} />
    </HomeStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings</Text>
      {/* <Text>{`${route.params.name}`}</Text> */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" initialParams={{ value: "SettingsStack" }} component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

const IconWithBadge = ({ name, badgeCount, color, size }) => {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <HomeIconWithBadge
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
        // initialParams={{ name: 'MY' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
