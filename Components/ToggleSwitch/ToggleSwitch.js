import React from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../redux/reducers/Theme';
import { getTheme } from '../../assets/styles/theme';

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state?.theme?.isDarkMode || false);
  const theme = getTheme(isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Pressable
      style={[
        styles.toggleContainer,
        {
          backgroundColor: isDarkMode ? theme.primary : theme.tabInactive,
        }
      ]}
      onPress={handleToggle}
    >
      <View
        style={[
          styles.toggleThumb,
          {
            backgroundColor: theme.backgroundColor,
            transform: [{ translateX: isDarkMode ? 20 : 0 }],
          }
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 44,
    height: 24,
    borderRadius: 12,
    padding: 2,
    justifyContent: 'center',
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ToggleSwitch;
