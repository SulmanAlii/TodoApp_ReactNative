import React,{useState} from 'react';
import * as Font from 'expo-font';
import Todo from './Todo';
import AppLoading from 'expo-app-loading';
import HomeStack from './routes/homeStack'

const getFonts = () => Font.loadAsync({
  'noto-regular' : require('./fonts/NotoSansTC-Regular.otf'),
  'NotoSansTC-Regular' : require('./fonts/NotoSansTC-Black.otf'),

})
export default function App() {

  const [fonts, setfonts] = useState(false)

  if (fonts) {
    return (
      <HomeStack/>
    );
  }else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setfonts(true)}
        onError={() => console.log('ss')}
      /> 
    )
  }
}
