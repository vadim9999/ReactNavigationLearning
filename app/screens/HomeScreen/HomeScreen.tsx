import React from 'react';
import { Text, Button } from 'react-native';

export const HomeScreen = ({ navigation, route }) => {
  console.log("home screen");
  
  return(
    <>
      <Text>{route.params.itemId}</Text>
      <Button
        title="Go to Capsules"
        onPress={() => navigation.navigate('Capsules', { parameter: 1000 })}
      />
      <Button
        title="update params"
        onPress={() =>
          navigation.setParams({
            itemId: 90000
          })
        }
      />
    </>
  );
};
