import React, {useState, useEffect} from 'react';
import {AccessibilityInfo, View, Text, StyleSheet} from 'react-native';

export default function AccessibilityInfoComponent() {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      handleReduceMotionToggled,
    );

    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      handleScreenReaderToggled,
    );

    AccessibilityInfo.fetch().then(reduceMotionEnabled => {
      setReduceMotionEnabled(reduceMotionEnabled);
    });

    AccessibilityInfo.fetch().then(screenReaderEnabled => {
      setScreenReaderEnabled(screenReaderEnabled);
    });

    return () => {
      AccessibilityInfo.removeEventListener(
        'reduceMotionChanged',
        handleReduceMotionToggled,
      );

      AccessibilityInfo.removeEventListener(
        'screenReaderChanged',
        handleScreenReaderToggled,
      );
    };
  }, []);

  const handleReduceMotionToggled = motionEnabled => {
    setReduceMotionEnabled(motionEnabled);
  };

  const handleScreenReaderToggled = readerEnabled => {
    setScreenReaderEnabled(readerEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}.
      </Text>
      <Text style={styles.status}>
        The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    margin: 30,
  },
});
