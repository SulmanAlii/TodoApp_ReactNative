import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Important = ({ navigation }) => {
  var urii = navigation.getParam("text", []);

  var list = urii;


 const list2 =  list.map((value) => {

  return <View key={value.key}><Text style={styles.item}>{(value.text.toString())}</Text></View>
  
  });

  return (
    <View style={styles.importantItems}>
        {list2}
    </View>
  );
};


const styles = StyleSheet.create({
  importantItems :{
    margin:5,
  },item:{
    borderWidth:1,
    padding:15,
    borderRadius:15,
    borderColor: 'green',
    margin:2
  }
})

export default Important;
