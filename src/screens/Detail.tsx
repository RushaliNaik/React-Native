import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import { RouteName } from '../constants/enumConstants';

interface DetailScreen {
  navigation: any;
}

export function DetailScreen({ navigation }: DetailScreen) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Button
        title="Go to the Detail screen... Again!"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack('Details')} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop('Details')}
      />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#DD5E98',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
