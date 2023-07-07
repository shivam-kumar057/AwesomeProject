import React from 'react'
import { StyleSheet,View ,Text, SafeAreaView } from 'react-native'
import InputComponent from './src/component/InputComponent'
import DatePickerComponent from './src/component/DatePickerComponent'
import VideoPlayers from './src/component/videoPlayer'

const App = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'black'}}>
      {/* <InputComponent
        placeHolder='PhoneNumber'
        headingtext=" phone "
        placeholderTextColor={'white'}
      /> */}
      {/* <DatePickerComponent/> */}
      <VideoPlayers/>
    </SafeAreaView>
  )
}

export default App