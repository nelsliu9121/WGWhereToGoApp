import { AppRegistry } from 'react-native'
import App from './src/App'
import StoryBookUI from './storybook'

AppRegistry.registerComponent('wgwheretogoapp', () => (__DEV__) ? StoryBookUI : App)
