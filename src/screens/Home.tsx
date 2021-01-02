import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import { RouteName } from '../constants/enumConstants';

interface HomeScreen {
  navigation: any;
}

export function HomeScreen({ navigation }: HomeScreen) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to the Detail screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

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
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
