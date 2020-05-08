import React, { useLayoutEffect, useState } from 'react';
import { Text, Button } from 'react-native';

export const CapsulesScreen = ({ route, navigation }) => {
  console.log("CapsulesScreen");
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log("first render capsulesScreen");
    navigation.setOptions({
      
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      )
    })
  }, [navigation, setCount])
  return (
    <>
      <Text>{count}</Text>
      <Text>CapsulesScreen</Text>
      <Text>{route.params.parameter}</Text>
      <Button
        title="Go to home with parameters"
        onPress={() =>
          navigation.push('Capsules', {
            parameter: parseInt(route.params.parameter, 10) * 4,
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="navigate to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="set options"
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      />
    </>
  );
}
