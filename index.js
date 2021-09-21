/**
 * @format
 */

import 'react-native-url-polyfill/auto'
import 'text-encoding-polyfill'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import './shim'

AppRegistry.registerComponent(appName, () => App)
