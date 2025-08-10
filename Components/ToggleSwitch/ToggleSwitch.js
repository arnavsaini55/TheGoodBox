import React from 'react';
import { View, StyleSheet } from 'react-native';

const ToggleSwitch = () => {
  return (
    <View style={styles.toggleContainer}>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F3F5F9',
  },
});

export default ToggleSwitch;
