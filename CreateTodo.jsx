import React from 'react'
import { View,StyleSheet,Button,Text,TouchableOpacity,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const CreateTodo = ({openInput,list,image,setOpenInput,changeHandler,pickImage,add}) => {
    return (
        <View>
            {openInput  ? <View style={styles.inputView}>
                            <TextInput type="text" placeholder="Your task"  onChangeText={changeHandler} style={styles.input}/>
                            <Button title="Choose Image" onPress={pickImage} />
                            {image && <Text>{image.substring(image.length - 40)}</Text>} 
                            <TouchableOpacity onPress={() => add()}  style={styles.addToList}><Text>ADD</Text></TouchableOpacity>
                            </View> : <Ionicons name="add-circle-sharp" size={24} color="black" onPress={() => setOpenInput(true)} style={styles.openInputBtn}/>}
                {list.length > 0 ? <Text style={styles.titleTODO}>LIST({list.length})</Text> : <Text  style={styles.titleTODO}>0 items</Text>}
        </View>
    )
}



const styles = StyleSheet.create({
    inputView : {
      marginTop:20,
      marginBottom:20,
    },
 
    input : {
      height: 100,
      borderColor:'blue',
      borderWidth:1,
      margin:5,
      borderRadius:5,
      textAlignVertical:'top',

    },
    addToList:{
      backgroundColor: '#FFAD8F',
      height: 30,
      alignItems:'center',
      justifyContent:'center',
      marginTop:3
    },
    openInputBtn :{
      fontSize:50,
      textAlign: 'center'
    },
    titleTODO:{
      fontSize:30,
      margin:3,
      marginBottom:5,
      color:'black'
    },
    
  });


export default CreateTodo;
