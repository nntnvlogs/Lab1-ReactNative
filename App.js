import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/components/firstScreen';
import Screen1a from './src/components/screen1a';
import Screen1b from './src/components/screen1b';
import screen1c from './src/components/screen1c';
import Screen1c from './src/components/screen1c';
import Screen1d from './src/components/screen1d';
import Screen1e from './src/components/screen1e';
import screen2a from './src/components/screen2a';
import Screen2a from './src/components/screen2a';
import ScreenXMEye from './src/components/screenXMEye';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      {/* <Screen1a /> */}
      {/* <Screen1b /> */}
      {/* <Screen1c/> */}
      {/* <Screen1d/> */}
      {/* <Screen1e/> */}
      {/* <Screen2a/> */}
      <ScreenXMEye/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
