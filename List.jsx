import React,{useEffect, useState,useLayoutEffect}  from 'react';
import { Dimensions,StyleSheet, View,Button, TextInput, FlatList, TouchableOpacity,Text, Alert, TouchableWithoutFeedback,Keyboard, Image,Platform, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import CreateTodo from './CreateTodo';
import { AntDesign } from '@expo/vector-icons'; 
import Footer from './Footer';
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Important from './Important';
import {createAppContainer, StackRouter} from 'react-navigation';


const colors = ['#0B91EA','#FF5A1F','#FFD6D9','#E33B3D','#ADD7F6','#7466E1','#FFAE03','#F45A52','#5DFEF9','#E98695','#7AC6F5','#85FF9B','#F3BABD'];
const random  = colors[Math.floor(Math.random() * colors.length*1)];
var dateDay = new Date();



const List = ({navigation}) => {



    const [name, setname] = useState()
    const [list, setlist] = useState([])
    const [openInput,setOpenInput] = useState(false);
    const [image, setImage] = useState(null);
    const [favouritesItems, setfavouritesItems] = useState([]);
    const [date, setdate] = useState()
    const [day, setday] = useState()




    useEffect(() => {
      const getPermissions = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            return alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
      getPermissions()
    }, []);

    
      const changeHandler = (value) => {
        setname(value)
      }

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
     
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      

      // 1609236216355
  const add = () => {
    if (name?.length > 4) {
      setlist(() => {
        return [...list,{text:name, image:image, key: Math.random().toString(), favourites:false,date:days[dateDay.getDay()]}]
      })
      setOpenInput(false)
      setname(' ')
      setImage(null)
    }else{
      Alert.alert('Oops!', 'Todos must be over 4 characters long',[{text:'OK'}])
    }
    Keyboard.dismiss
    setdate(days[dateDay.getDay()])
    setday(dateDay.getDate())

  }

  const addToFavourites = (id) => {
    const item = list.map(item => {
      if (item.key === id) {
        item.favourites = !item.favourites;
        if (item.favourites) {
          if (!favouritesItems.includes(item)) {
            setfavouritesItems(() => {
              return[ ...favouritesItems,item]
            })
          }
        }else if (favouritesItems.includes(item) && item.key === id) {
          favouritesItems.splice(item,1)
        }
      }
      return item;
    });
    setlist(item)

  }

  const deleteItem = (id,text) =>{
    Alert.alert(
      "",
      "Wanna delete this item? ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => 
        setlist(() => {
          return list.filter(todo => todo?.key !== id);
          })
    
      }
      ],
      { cancelable: false }
    );
  }



    return (
      <ScrollView >
            <Footer FavouriteList={favouritesItems} navigation={navigation} />
            <CreateTodo openInput={openInput}  add={() => add()} changeHandler={changeHandler} image={image} list={list} setOpenInput={setOpenInput} pickImage={pickImage} />
            {list.length > 0 && <Text style={styles.day}>{date == days[dateDay.getDay()] ? 'Today' : date}, {day}</Text>}
            <View style={{flex:1}}>
                <FlatList 
                data={list}
                renderItem={({item}) => {
                  if (item.image && item) {
                    return <TouchableOpacity style={styles.itemView}>
                                <View style={{alignItems:'center',flexDirection:'row'}}>
                                    <Text style={styles.item} onPress={() => navigation.navigate('Details', item)}>{item.text}</Text>
                                     {!item.favourites ? <AntDesign name="staro" size={24} color="black" onPress={() => addToFavourites(item.key)}/>
                                    : <AntDesign name="star" size={24} color="black" onPress={() => addToFavourites(item.key)}/>}
                                    <MaterialCommunityIcons name='delete-circle' size={28} style={styles.icon} onPress={() => deleteItem(item.key,item.text)}/>
                                </View>
                                <View>
                                  {item.image ? <Image source={{uri:item.image}}  style={styles.img}/> : <Text></Text>  } 
                                </View>
                            </TouchableOpacity>
                  }else{
                    return  <View style={styles.itemViewWithoutImage}>
                    <View style={{alignItems:'center',flexDirection:'row'}}>
                      <Text style={styles.item} onPress={() => navigation.navigate('Details', item)}>{item.text}</Text>
                      {!item.favourites ? <AntDesign name="staro" size={24} color="black" onPress={() => addToFavourites(item.key)}/>
                      : <AntDesign name="star" size={24} color="black" onPress={() => addToFavourites(item.key)}/>}
                      <MaterialCommunityIcons name='delete-circle' size={28} style={styles.icon} onPress={() => deleteItem(item.key)}/>
                    </View>
                  </View>
                  }
                   
                }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    day : {
      margin:5,
      fontSize: 25
    },
    itemView: {
      backgroundColor : random,
      borderRadius: 20,
      margin : 4,
      
    },
    itemViewWithoutImage :{
      backgroundColor : "#89CE94",
      borderRadius: 20,
      margin : 4,
    },
    item: {
      margin : 9,
      fontWeight:'bold'
    }, 
    img:{
      flex:1,
      height:200,
      borderRadius:15
    },
    inputView : {
      marginTop:20,
      marginBottom:20,
    },
    icon:{
      position:'absolute',
      right: 20,
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
      borderRadius:40,
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
      margin:5,
      marginBottom:10,
      color:'black'
    },
    imageView:{
      borderWidth:2,
      backgroundColor: 'red',
      height:100
    }
    
  });

export default  (List);
