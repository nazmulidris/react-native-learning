/*
 * Copyright 2018 Nazmul Idris All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableHighlight, View} from "react-native";

import type {ImageType} from "../flow/TypeAliases";
import {mainview_style} from "../styles/Styles";

// note uri won't work on iOS with http
const res_img = require('../static-res/react-native-img-by-maret-eiland.png');

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
  
        <Image style={mainview_style.image2} source={res_img}/>
      </View>
    );
  }
  
}

MainView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {MainView};