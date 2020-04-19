import React, {useState, useEffect, useRef} from 'react';
import {Animated, View, Text, Button, StyleSheet} from 'react-native';

export default function AnimatedComponent() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, {opacity: fadeAnim}]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title={'Fade In'} onPress={fadeIn} />
        <Button title={'Fade Out'} onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },

  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
