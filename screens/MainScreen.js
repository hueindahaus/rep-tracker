import React from "react"
import {View, Image, StyleSheet, Text} from "react-native"
import colors from "../constants/colors.js"
import ClickableContainer from "../components/ClickableContainer.js"
import MainHeader from "../components/MainHeader.js"

function MainScreen(props){

  return(
    <View style={styles.container}>
      <MainHeader />
      <ClickableContainer style={styles.primaryButton} >
        <Image style={styles.add} source={require("../assets/plus.png")}/>
        <Text style={styles.buttonText} >Add lift</Text>
      </ClickableContainer>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base,
    alignItems: 'center',
    
  },
  primaryButton: {
    minHeight: 60,
    minWidth: 100,
    
    position: "absolute",
    bottom: 30,
    right: "2%",
    alignItems: "center",
    justifyContent: "center"
    
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.text,
    fontWeight: "100"
  },
  add: {
    width: 24,
    height: 24
  }
})

export default MainScreen