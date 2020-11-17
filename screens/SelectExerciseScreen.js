import React, {useState, useRef} from "react"
import {View, Image, StyleSheet, Text} from "react-native"
import colors from "../constants/colors.js"
import ClickableContainer from "../components/ClickableContainer.js"
import { SearchBar } from 'react-native-elements';


function SelectExerciseScreen({ navigation, route }){

  var searchElement = useRef()
  const [search, updateSearch] = useState("")
  

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Exercise</Text>
        <ClickableContainer style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image style={styles.arrow} source={require("../assets/x.png")}/>
        </ClickableContainer>
      </View>

      <SearchBar
        placeholder="Search for exercise..."
        onChangeText={() => {}}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.searchInput}
        onChangeText={(input) => {updateSearch(input)}}
        onClear={() => {updateSearch("")}}
        value={search}
        ref={s => searchElement = s}
      />
      {search == "" ? 
      <Text>Muscle Group</Text>: 
      <Text>Exercise</Text>}
      
      
      
      
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "8%",
    borderRadius: 16
    
  },
  arrow: {
    width:20,
    height:20
  },
  header: {
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "bold",
    textAlignVertical: "center",
    marginHorizontal: "8%",
    fontSize: 20

  },
  searchContainer: {
    padding:0,
    width: "84%",
    marginTop: 20,
    backgroundColor: colors.white,
    borderBottomColor: colors.white,
    borderTopColor: colors.white,
  },
  searchInputContainer: {
    backgroundColor: colors.white2,
    height: 60,
    borderRadius: 16
  },
  searchInput: {
    color: colors.text
  }
  
})

export default SelectExerciseScreen