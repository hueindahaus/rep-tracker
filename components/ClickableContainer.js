import React from "react"
import {StyleSheet, TouchableOpacity} from "react-native"
import colors from "../constants/colors"



function ClickableContainer(props){



  return (
    <TouchableOpacity style={{...styles.container, ...props.style}} onPress={props.hasOwnProperty("onPress") ? () => props.onPress() : () => {}}>
      {props.children}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: colors.white2,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
  }
})

export default ClickableContainer