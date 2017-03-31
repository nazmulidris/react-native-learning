// @flow

import React, {Component} from "react";
import {Image, ScrollView, Text, View} from "react-native";

import {flexboxview2_style} from "../styles/Styles";

class FlexboxView2 extends Component {
  constructor(props) {
    super(props);
    this.state = {longText: "haven't made fetch call yet"};
  }
  
  componentWillMount() {
    console.log(`FlexboxView2 component will mount`);
    this.getLongText();
  }
  
  render() {
    let msg1: string = "Flexbox View";
    let msg2: string = "Details Text";
    let img_network = {uri: "http://i.imgur.com/RRUe0Mo.png"};
    let img_static = require('../static-res/maldives.jpg');
    
    return (
      <View style={flexboxview2_style.container}>
        <ScrollView>
          <Image style={flexboxview2_style.img_static} source={img_static}>
            <Text style={flexboxview2_style.text4}>Maldives Local Image</Text>
          </Image>
          <Image style={flexboxview2_style.img_network} source={img_network}>
            <Text style={flexboxview2_style.text4}>Maldives Network Image</Text>
          </Image>
          <Text style={flexboxview2_style.text1}>{msg1}</Text>
          <Text style={flexboxview2_style.text2}>{msg2}</Text>
          <Text style={flexboxview2_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview2_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview2_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview2_style.text3}>{this.state.longText}</Text>
        </ScrollView>
      </View>
    );
    
  }
  
  getLongText() {
    this.setState({longText: "about to load uri"});
    let numLines: number = 1;
    let uri: string = `https://baconipsum.com/api/?type=meat-and-filler&paras=${numLines}&format=text`;
    
    fetch(uri)
      .then((resp) => {
        resp.text()
            .then((data) => {
              this.setState({longText: data})
            })
      })
      .catch((err) => {
        console.log(`problem getting data from ${uri}, error: ${err}`)
      });
  }
  
}// end FlexBoxView2

export {FlexboxView2};