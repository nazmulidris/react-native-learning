// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";

import type {ImageType} from "../flow/TypeAliases";
import {ImageView} from "../app/ImageView";
import {mainview_style} from "../styles/Styles";

const imageUrl: ImageType = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  alt_text: 'banana'
};

class MainView extends Component {
  componentWillMount() {
    console.log(`MainView component will mount`);
  }
  
  render() {
    return (
      <View style={mainview_style.container}>
        <Text style={mainview_style.welcome}>
          Welcome to R3BL RN!
        </Text>
        <Text style={mainview_style.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={mainview_style.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <ImageView uri={imageUrl.uri} height={110} width={193}/>
      </View>
    );
  }
  
}

export {MainView};