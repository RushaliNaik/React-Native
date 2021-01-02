import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { RouteName } from '../constants/enumConstants';

export function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
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
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
