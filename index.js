/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push';

class CoreApp extends Component {
    render() {
      return <App />;
    }
  }

let codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
};

CoreApp = codePush(codePushOptions)(CoreApp);
export default CoreApp;


AppRegistry.registerComponent(appName, () => CoreApp);
