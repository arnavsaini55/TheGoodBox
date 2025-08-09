import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getTheme } from '../../assets/styles/theme';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode);
  
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  const tabStyle = [
    style.tab, 
    { backgroundColor: props.isInactive ? theme.tabInactive : theme.tabActive },
    tabWidth
  ];

  const titleStyle = [
    style.title, 
    { color: props.isInactive ? theme.tabTextInactive : theme.tabTextActive }
  ];

  return (
    <Pressable
      style={tabStyle}
      onPress={() => props.onPress(props.tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={titleStyle}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;