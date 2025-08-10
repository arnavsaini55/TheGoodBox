// BackButton.js
import React from "react";
import { Pressable } from "react-native";
import PropTypes from "prop-types"; 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} color={'black'} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
