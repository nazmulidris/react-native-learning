// @flow

import React, {Component} from "react";
import {Image, StatusBar, Text, View} from "react-native";

import {style3} from "../styles/Styles";

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
      <View style={style3.container}>
        <StatusBar hidden={true} translucent={true} animated={true}
                   barStyle={'light-content'} backgroundColor={'#1273de'}/>
        <Image style={style3.img_static} source={img_static}>
          <Text style={style3.text4}>Maldives Local Image</Text>
        </Image>
        <Image style={style3.img_network} source={img_network}>
          <Text style={style3.text4}>Maldives Network Image</Text>
        </Image>
        <Text style={style3.text1}>{msg1}</Text>
        <Text style={style3.text2}>{msg2}</Text>
        <Text style={style3.text3}>{this.state.longText}</Text>
        <Text style={style3.text3}>{this.state.longText}</Text>
        <Text style={style3.text3}>{this.state.longText}</Text>
        <Text style={style3.text3}>{this.state.longText}</Text>
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