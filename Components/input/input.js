import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const Input = (props) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={styles.input}
        value={value}
        secureTextEntry={props.secureTextEntry} 
        keyboardType={props.keyboardType}
        onChangeText={(val) => {
          setValue(val);
          props.onChangeText(val);
        }}
        
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
