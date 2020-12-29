import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native';

const Header = ({navigation}) => {



    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <Text >Home</Text>
                <Text>Details</Text>
                <Text>Contact Us</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
   
    menu : {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        height: 50,
        alignItems:'center',
        borderWidth: 1
    },
    title :{
        textAlign: 'center',
        backgroundColor: 'coral',
        fontSize : 20,
        fontFamily:'NotoSansTC-Regular'
    }

})



export default Header;
