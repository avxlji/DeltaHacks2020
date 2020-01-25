import React from 'react';
import CameraScreen from './components/CameraScreen';
import CreateAccount from './components/CreateAccount.js'
import { StyleSheet, Text, View, Button } from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      camera_mode: false,
      create_account_screen: false
    }
  }
  render() {
    return (
      this.state.camera_mode ?
        <CameraScreen back={() => this.setState({ camera_mode: false })} /> :
        this.state.create_account_screen ?

          <CreateAccount back={() => this.setState({ create_account_screen: false })} />
          :

          <View style={styles.container}>
            <Button title="Open Camera" onPress={() => this.setState({ camera_mode: true })} />
            <Button title="Create Account" onPress={() => this.setState({ create_account_screen: true })} />
            <Text>Open up App.js to start working on your app!</Text>
          </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;