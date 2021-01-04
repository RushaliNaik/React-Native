import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import { RouteName } from '../constants/enumConstants';

interface DetailScreen {
  navigation: any;
}

const Separator = () => <View style={styles.separator} />;

export function DetailScreen({ navigation }: DetailScreen) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Separator />
      <Button
        title="Go to the Detail screen... Again!"
        onPress={() => navigation.push('Details')}
      />
      <Separator />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Separator />
      <Button title="Go back" onPress={() => navigation.goBack('Details')} />
      <Separator />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 100,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#91CB3E',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
