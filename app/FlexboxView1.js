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
import {ScrollView, StatusBar, Text, TouchableHighlight, View} from "react-native";

import {flexboxview1_style} from "../styles/Styles";

class FlexboxView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {longText: "haven't made fetch call yet"};
  }
  
  componentWillMount() {
    console.log(`FlexbovView1 component will mount`);
    this.getLongText();
  }
  
  render() {
    let msg1: string = "Flexbox View (tap to go back)";
    let msg2: string = "Details Text";
    
    return (
      <View style={flexboxview1_style.container}>
        <ScrollView>
          <StatusBar hidden={true} translucent={true} animated={true}
                     barStyle={'light-content'} backgroundColor={'#1273de'}/>
  
          <TouchableHighlight
            activeOpacity={1}
            underlayColor='#c1e1c5'
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <Text style={flexboxview1_style.text1}>{msg1}</Text>
          </TouchableHighlight>
          
          <Text style={flexboxview1_style.text2}>{msg2}</Text>
          <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
          <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
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
  
}// end FlexBoxView1

FlexboxView1.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export {FlexboxView1};