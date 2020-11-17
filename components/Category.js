import React, {useState} from "react"
import {View, StyleSheet, Text, Image} from "react-native"
import ClickableContainer from "./ClickableContainer"
import colors from "../constants/colors.js"
import Exercise from "./Exercise.js"


function Category(props){

  const [opened, setOpened] = useState(false)

  return(
    <ClickableContainer style={styles.container} onPress={() => setOpened((prevOpened) => {return !prevOpened})}>
      <View style={styles.topPart}>
        <Text style={styles.title}>{props.muscleGroup}</Text>
        <Image style={styles.openIcon} source={require("../assets/chevron-down.png")}/>
      </View>
      {opened ? 
      <View style={styles.exerciseContainer}>
        <Exercise name="Bench Press"/>
        <Exercise name="Bench Press"/>
        <Exercise name="Bench Press"/>
      </View> : 
      null}
      
    </ClickableContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical: 6,
    width: "100%",
    backgroundColor: "#00000000",
  },
  topPart: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.dark,
    borderRadius: 16,
    marginBottom: 4
    
  },
  title: {
    marginHorizontal: 20,
    color: colors.white2,
    fontWeight: "bold"

  },
  openIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 20,
  },
  exerciseContainer: {
    backgroundColor: colors.white
  }
})

export default Category