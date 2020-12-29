import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 


const Footer = ({FavouriteList,navigation}) => {
    return (
            <Entypo name="heart" size={40} color="black" onPress={() => navigation.navigate('Important',{'text':FavouriteList})} style={styles.footerView} />

    )
}

const styles = StyleSheet.create({
    footerView:{
        textAlign:'center',
        height :40,
        backgroundColor:'#47BFD7'
    }
})

export default Footer;
