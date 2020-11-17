import React from "react"
import {View, Image, StyleSheet, Text} from "react-native"
import colors from "../constants/colors.js"
import ClickableContainer from "../components/ClickableContainer.js"
import MainHeader from "../components/MainHeader.js"

function MainScreen({ navigation, route }){

  return(
    <View style={styles.container}>
      <MainHeader />
      <ClickableContainer style={styles.primaryButton} onPress={() => navigation.navigate("SelectExerciseScreen")}>
        <Text style={styles.buttonText}>Add exercise</Text>
        <Image style={styles.add} source={require("../assets/chevrons-right.png")}/>
      </ClickableContainer>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    
  },
  primaryButton: {
    minHeight: 60,
    width: "36%",
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: colors.dark,
  },
  buttonText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.white,
    fontWeight: 'bold',
    marginHorizontal: 0
  },
  add: {
    width: 24,
    height: 24,  
  },
  
})

export default MainScreen