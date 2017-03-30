// @flow

import React, {Component} from "react";
import {
  BackAndroid,
  Navigator,
  Text,
  ToastAndroid,
  TouchableHighlight
} from "react-native";

import {MainView} from "./MainView";
import {FlexboxView1} from "./FlexboxView1";
import {FlexboxView2} from "./FlexboxView2";
import {_} from "lodash";

import * as styles from "../styles/Styles";

//
// list of routes
//

const routes = [
  {
    title: 'mainview',
    index: 0
  },
  {
    title: 'flexboxview1',
    index: 1
  },
  {
    title: 'flexboxview2',
    index: 2
  },

];

//
// This class holds the Navigator component
//

class Router extends Component {
  
  renderScene(route, navigator) {
    return (
      <TouchableHighlight onPress={
        () => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }
      }>
        <Text style={styles.router_style.text1}>Show {route.title}</Text>
      </TouchableHighlight>
    );
  };
  
  render() {
    return (
      <Navigator
        style={styles.router_style.container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    );
  }
  
  //
  // Back button handling for Android
  //
  
  backButtonListener() {
    let msg = `hardware back press route=[${route.index}, ${route.title}]`;
    ToastAndroid.show(msg, 5000);
    return true;
    // if (route.index === 0) {
    //   BackAndroid.exitApp();
    //   return true;
    // } else {
    //   nav.pop();
    //   return true;
    // }
  };
  
  handleBackButton(route, nav) {
    BackAndroid.addEventListener('hardwareBackPress', backButtonListener);
  };
  
  //
  // old render code
  //
  
  render2() {
    
    let route = 2;
    
    switch (route) {
      case 0:
        return (<MainView/>);
      case 1:
        return (<FlexboxView1/>);
      case 2:
        return (<FlexboxView2/>);
    }
    
  }// end render()
  
  componentWillMount() {
    console.log(`Router component will mount`);
  }
  
}// end Router component

export {Router}