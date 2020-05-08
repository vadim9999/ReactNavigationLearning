import React from 'react';
import { Button, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen
} from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';



const HomeScreen = ({ navigation }) => {
  // const isDrawerOpen = useIsDrawerOpen();
  // console.log("is", isDrawerOpen);
  
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Close drawer" onPress={() => navigation.closeDrawer()} />
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

const NotificationsScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
