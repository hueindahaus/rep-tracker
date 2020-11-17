import React from "react"
import {View, StyleSheet, Text, Image} from "react-native"
import ClickableContainer from "./ClickableContainer.js"
import Container from "./Container.js"
import colors from "../constants/colors.js"


function MainHeader(props){

  return(
    <View style={styles.container}>
      <ClickableContainer style={styles.button}>
        <Image style={styles.arrow} source={require("../assets/chevron-left.png")}/>
      </ClickableContainer>
      <Container style={styles.textContainer}>
        <Text style={styles.text}> Today </Text>
      </Container>
      <ClickableContainer style={styles.button}>
        <Image style={styles.arrow} source={require("../assets/chevron-right.png")}/>
      </ClickableContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 60
    
  },
  textContainer: {
    width: "60%"
  },
  text:{
    textAlign: "center",
    color: colors.text,
    fontSize: 16
  },
  button: {
    width: "15%",
    height: 50,
    marginHorizontal: "2%",
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    width:20,
    height:20
  }
})

export default MainHeader