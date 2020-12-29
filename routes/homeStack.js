import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackRouter} from 'react-navigation';
import Todo from '../Todo';
import Details from '../Details';
import Header from '../Header';
import Contacto from '../Contacto';
import Important from '../Important';
import {createBottomTabNavigator } from 'react-navigation-tabs'
import {Button,Image} from 'react-native';


const screens = {
    Home: {
        screen : Todo,
        navigationOptions : ({navigation}) => {
            return{
            title:"TODO APP",
            // headerRight:  (
            //     <Button
            //       onPress={() => navigation.navigate('Important')}
            //       title="Important"
            //       color="red"
            //     />
            //   ),
            }
        }
    },
    Important: {
        screen: Important,
        navigationOptions : {
            title: 'Important'
        }
    },
  
    Details : {
        screen: Details,
        navigationOptions : {
            title: 'Details'
        }
    },
   
    Header : {
        screen: Header
    },
    Contacto:{
        screen : Contacto
    }
}



const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions :{
        headerStyle : {
            backgroundColor : 'coral',
        }
    },
})
export const TabScreens = createBottomTabNavigator(
    {
     Important : Important
    })

export default createAppContainer(HomeStack);