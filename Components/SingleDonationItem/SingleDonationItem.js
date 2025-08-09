import React from "react";
import PropTypes from 'prop-types';
import Badge from "../Badge/Badge";
import Header from "../Header/Header";
import style from "./style";
import { View, Image, Pressable } from "react-native";
import { useSelector } from 'react-redux';
import { getTheme } from '../../assets/styles/theme';

const DonationItem = (props) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode);

  return (
    <Pressable 
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image 
         resizeMode={'cover'}
         source={{ uri: props.uri }} style={style.Image} />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={theme.textPrimary} />
        <Header title={'$' + parseFloat(props.price).toFixed(2)} type={3} color={theme.accent} />
      </View>
    </Pressable>
  );
};

DonationItem.defaultProps = {
  onPress: () => {},
};

DonationItem.propTypes = {
   donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  Price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPress: PropTypes.func,
};

export default DonationItem;
