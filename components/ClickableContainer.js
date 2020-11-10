import React from "react"
import {StyleSheet, TouchableOpacity} from "react-native"
import colors from "../constants/colors"



function ClickableContainer(props){
  return (
    <TouchableOpacity style={{...props.style, ...styles.container}}>
      {props.children}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: colors.front,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
  }
})

export default ClickableContainer