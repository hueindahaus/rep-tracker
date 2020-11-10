import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import MainScreen from "./screens/MainScreen.js"


export default function App() {


  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar backgroundColor="#FFFFFF"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
