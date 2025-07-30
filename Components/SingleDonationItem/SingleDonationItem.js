import React from "react";
import PropTypes from 'prop-types';
import Badge from "../Badge/Badge";
import Header from "../Header/Header";
import style from "./style";
import { View, Image } from "react-native";

const DonationItem = (props) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image source={{ uri: props.uri }} style={style.Image} />
      </View>
      <View style ={style.donationInformation}>
      <Header title={props.donationTitle} type={3} color={'#0A043C'} />
      <Header title={'$' + parseFloat(props.Price).toFixed(2)} type={3} color={'#6930c3ff'} />
      </View>
    </View>
  );
};

DonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  Price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DonationItem;
