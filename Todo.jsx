import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View,Button, TextInput, FlatList, TouchableOpacity,Text, Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Header';
import List from './List';

const Todo = ({navigation}) => {



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }}>
            <View style={styles.container}>
                    {/*<Header navigation={navigation}/>*/}
                    <List  navigation={navigation}/>
            </View>
          </TouchableWithoutFeedback>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
 
    
  });
  

export default Todo;
