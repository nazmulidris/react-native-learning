// @flow

import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableHighlight, View} from "react-native";

import type {ImageType} from "../flow/TypeAliases";
import {ImageView} from "../app/ImageView";
import {mainview_style} from "../styles/Styles";

// note uri won't work on iOS with http
const imageUrl: ImageType = {
  uri: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/10659017_10102325633977818_5355456429616362295_o.jpg?oh=299b71a4d1ea43e010c6a91fbe75fb3d&oe=5959721C',
  alt_text: 'react native icon'
};

// note uri won't work on iOS with http
const imageUrl2: ImageType = {
  uri: 'https://lh3.ggpht.com/XL0CrI8skkxnboGct-duyg-bZ_MxJDTrjczyjdU8OP2PM1dmj7SP4jL1K8JQeMIB3AM=w300',
  alt_text: 'android'
};

// note uri won't work on iOS with http
const imageUrl3: ImageType = {
  uri: 'https://cdn0.iconfinder.com/data/icons/Android-R2-png/512/Market-Android-R.png',
  alt_text: 'google play store'
};

class MainView extends Component {
  componentWillMount() {
    console.log(`MainView component will mount`);
  }
  
  render() {
    return (
      <View style={mainview_style.v_container}>
        <StatusBar hidden={true} translucent={true} animated={true}
                   barStyle={'light-content'} backgroundColor={'#1273de'}/>
        <Text style={mainview_style.welcome}>
          Welcome to R3BL RN!
        </Text>
        <Text style={mainview_style.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
  
        <View style={mainview_style.h_container}>
    
          <TouchableHighlight
            activeOpacity={1}
            underlayColor='#c1e1c5'
            onPress={() => {
              this.props.navigator.push({index: 1});
            }}>
            <Image source={imageUrl2} style={mainview_style.image}/>
          </TouchableHighlight>
    
          <TouchableHighlight
            activeOpacity={1}
            underlayColor='#c1e1c5'
            onPress={() => {
              this.props.navigator.push({index: 2});
            }}>
            <Image source={imageUrl3} style={mainview_style.image}/>
          </TouchableHighlight>
  
        </View>
        
        <ImageView uri={imageUrl.uri} height={110} width={193}/>
      </View>
    );
  }
  
}

MainView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {MainView};