import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import{NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import MainScreen from "./screens/MainScreen.js"
import SelectExerciseScreen from "./screens/SelectExerciseScreen.js"


const Stack = createStackNavigator()

export default function App() {


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SelectExerciseScreen" component={SelectExerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
