// @flow

import React, {Component} from "react";
import {BackAndroid, Navigator, ToastAndroid} from "react-native";

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
    name: 'main view',
    index: 0
  },
  {
    name: 'flexbox view 1',
    index: 1
  },
  {
    name: 'flexbox view 2',
    index: 2
  },

];

let _navigator;

//
// This class holds the Navigator component
//

class Router extends Component {
  
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (_navigator.getCurrentRoutes().length === 1) {
        return false;
      }
      _navigator.pop();
      return true;
    })
  }
  
  render() {
    return (
      <Navigator
        style={styles.router_style.v_container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    );
  }
  
  renderScene(route, navigator) {
    _navigator = navigator;
    switch (route.index) {
      case 0:
        return (
          <MainView navigator={navigator} title={route.name}/>
        );
      case 1:
        return (
          <FlexboxView1 navigator={navigator} title={route.name}/>
        );
      case 2:
        return (
          <FlexboxView2 navigator={navigator} title={route.name}/>
        );
    }
    
  };
  
  //
  // Back button handling for Android
  //
  
  backButtonListener() {
    let msg = `hardware back press route=[${route.index}, ${route.name}]`;
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
  
  render_old() {
    
    let route = 0;
    
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