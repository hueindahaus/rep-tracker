import React from "react"
import {StyleSheet, View} from "react-native"
import colors from "../constants/colors"



function Container(props){

  return (
    <View style={{...props.style, ...styles.container}}>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white2,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
  }
})

export default Container