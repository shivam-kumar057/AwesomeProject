import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, Dimensions,View } from 'react-native'
//import VideoPlayer from 'react-native-video-player';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import Video from 'react-native-video';
 export interface S {
  pasueVideos?:boolean
}

export default class VideoPlayers extends Component<S> {
  constructor(props:any) {
    super(props);
    this.state = {
      pauseVideos :false
    }
  }
  pause = () => {
    this.setState({pauseVideos:!this.state.pauseVideos})
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
        <Text>jhdshsd</Text>
        <Video source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          fullscreenAutorotate={true}
          style= {{ ...styles.video ,}}
          playInBackground={true}
         resizeMode={'contain'}
         repeat={true}
         onError={(e) => {
           console.log('video error' + e);
         }}
         paused={this.state.pauseVideos}
        />
        <View style={{}}>

        </View>
        <Text onPress={this.pause}>pause</Text>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
  },
  video: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
      height:"50%",
    width:"100%"
  
  },
})

