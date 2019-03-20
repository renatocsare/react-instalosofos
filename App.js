import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import PhotoSection from './src/components/photo-section';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Instalósofos"/>
        <PhotoSection/>
      </View>
    );
  }
}
//style={styles.container}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
