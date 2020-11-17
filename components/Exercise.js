import React from "react"
import {StyleSheet, Text} from "react-native"
import ClickableContainer from "./ClickableContainer.js"
import colors from "../constants/colors"

function Exercise(props){

  return (
    <ClickableContainer style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
    </ClickableContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: colors.white2,
    marginVertical: 6,
    
  },
  title: {
    marginHorizontal: 20,
    color: colors.text
  }
})


export default Exercise