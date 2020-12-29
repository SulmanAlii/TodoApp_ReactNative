import React from 'react';
import {Button, Text, View,Image, StyleSheet} from 'react-native';

const Details = ({navigation}) => {

    const uri = navigation.getParam('image')

    return (
        <View style={styles.mainView}>
            <Text style={styles.text}>{navigation.getParam('text')}</Text>
            <Image style={styles.img} source={{uri: uri}} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        borderWidth:2,
        flex:1
    },
    text :{
        fontSize: 40,
        margin:10
    },
    img :{
        height:300,
        marginTop:15,
        margin:10,
        borderRadius: 5
    }
})


export default Details;
