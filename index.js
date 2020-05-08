/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, Text, View } from 'react-native';
import React from 'react';
// import { App } from './app/App';
// import { TabNavigation } from './app/TabNavigation';
import { name as appName } from './app.json';
import { DrawerNavigation } from './app/DrawerNavigation';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

console.log("loaded");

const App = () => (
  <View>
    <Text>HiI</Text>
  </View>
);

AppRegistry.registerComponent(appName, () => DrawerNavigation);
