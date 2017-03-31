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

let _navigator, _route;

//
// This class holds the Navigator component
//

class Router extends Component {
  
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', () => {
      // debug msg
      let msg = 'back press';
      let length = _navigator.getCurrentRoutes().length;
      if (!_.isNil(_navigator)) {
        msg = `${msg} length=${length}`;
      }
      if (!_.isNil(_route)) {
        msg = `${msg} index=${_route.index}, name=${_route.name}`
      }
      ToastAndroid.show(msg, 10000);
  
      // actual code
      if (length === 1 || length === routes.length) {
        return false;
      }
      _navigator.pop();
      return true;
    })
  }
  
  /*
   // The following code is a really simplistic router
   let route = 0;
   switch (route) {
   case 0: return (<MainView/>);
   case 1: return (<FlexboxView1/>);
   case 2: return (<FlexboxView2/>);
   }
   */
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
  
  renderScene(route, navigator) {
    _navigator = navigator;
    _route = route;
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
  
  componentWillMount() {
    console.log(`Router component will mount`);
  }
  
}// end Router component

export {Router}