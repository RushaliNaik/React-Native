import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import { RouteName } from '../constants/enumConstants';

interface ProfileScreen {
  navigation: any;
}

const Separator = () => <View style={styles.separator} />;

export function ProfileScreen({ navigation }: ProfileScreen) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Separator />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ProfileScreen;

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
    backgroundColor: '#FFB30F',
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
