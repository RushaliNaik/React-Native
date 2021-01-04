import React, { useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function AnimationScreen() {
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={styles.containerWrap}>
      <View style={styles.container}>
        <Animated.View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              backgroundColor: '#A07178',
              marginLeft: leftValue,
            },
          ]}
        />
        <TouchableOpacity onPress={moveBall}>
          <Text>Hey Click me here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AnimationScreen;

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
