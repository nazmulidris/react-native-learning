// @flow

import React from "react";
import {StyleSheet} from "react-native";

// fonts available - https://github.com/dabit3/react-native-fonts
// flexbox guide - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
const flexboxview1_style = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'column-reverse',
      flexWrap: 'nowrap',
      backgroundColor: '#8ed1fc'
    },
    text1: {
      fontSize: 20,
      fontWeight: '900',
      fontFamily: 'monospace',
      flex: -1,
      backgroundColor: '#00d084',
      margin: 16,
      padding: 16,
    },
    text2: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'monospace',
      flex: -1,
      color: '#c4def6',
      backgroundColor: '#1273de',
      margin: 16,
      padding: 16,
    },
    text3: {
      fontSize: 12,
      fontWeight: '200',
      fontFamily: 'monospace',
      flex: 1,
      color: '#697689',
      backgroundColor: '#d4c4fb',
      margin: 16,
      padding: 16,
    }
  }
);

// more info on images - https://facebook.github.io/react-native/docs/images.html
const flexboxview2_style = StyleSheet.create(
  {
    container: {
      overflow: 'visible',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#8ed1fc'
    },
    img_static: {
      flex: 1,
      width: undefined,
      height: undefined,
      resizeMode: 'cover'
    },
    img_network: {
      flex: 1,
      resizeMode: 'contain'
    },
    text1: {
      alignSelf: 'flex-end',
      fontSize: 20,
      fontWeight: '900',
      fontFamily: 'monospace',
      flex: -1,
      backgroundColor: '#00d084',
      margin: 16,
      padding: 16,
    },
    text2: {
      alignSelf: 'flex-start',
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'monospace',
      flex: -1,
      color: '#c4def6',
      backgroundColor: '#1273de',
      margin: 16,
      padding: 16,
    },
    text3: {
      fontSize: 12,
      fontWeight: '200',
      fontFamily: 'monospace',
      flex: -1,
      color: '#697689',
      backgroundColor: '#d4c4fb',
      margin: 16,
      padding: 16,
    },
    text4: {
      color: '#1273de',
      backgroundColor: 'rgba(212, 196, 251, 0.5)',
      fontSize: 12,
      fontWeight: '200',
      fontFamily: 'monospace',
      padding: 16,
    }
  }
);

export const router_style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#c1e1c5',
    },
    text1: {
      flex: -1,
      color: '#1273de',
      backgroundColor: '#d4c4fb',
      fontSize: 18,
      fontWeight: '200',
      fontFamily: 'monospace',
      padding: 16,
    }
  });

const mainview_style = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: '#c1e1c5',
    },
    welcome: {
      flex: -1, // shrink to min height & width if needed
      fontSize: 20,
      color: '#006b7699', // #RGBA supported
      fontFamily: 'monospace', // list of families https://goo.gl/fsrJsK
      fontWeight: '500', // weights are between 100 and 900
      textAlign: 'center',
      margin: 16,
    },
    instructions: {
      flex: -1,
      margin: 16,
      fontFamily: 'monospace',
      fontSize: 12,
      color: 'rgba(33, 150, 243, 0.6)', // different ways to provide color
      textAlign: 'center',
    },
    h_container: {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch', // overrides container alignItems
      backgroundColor: '#fef3bd',
      padding: 16,
    },
    image: {
      flex: -1,
      margin: 8,
      height: 150,
      width: 100,
      resizeMode: 'contain', //'cover' | 'contain'
    },
  });

function mainview_style_image(width: number, height: number) {
  return StyleSheet.create(
    {
      imageSize: {
        width: width,
        height: height,
      },
      padding: {
        marginTop: 16,
      },
    });
}


export {
  mainview_style,
  mainview_style_image,
  flexboxview1_style,
  flexboxview2_style,
};