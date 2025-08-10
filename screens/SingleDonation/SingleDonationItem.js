import React from 'react';
import globalStyle from '../../assets/styles/globalStyle';  
import BackButton from '../../Components/BackButton/BackButton';
import { useSelector } from 'react-redux';
import { Image, SafeAreaView, ScrollView, Text } from 'react-native';
import style from './Style';
import Button from '../../Components/Button/Button';

const SingleDonationItem = ({ navigation }) => {
  const donationItemInformation = useSelector(
    state => state.donation.selectedDonationInformation,
  );

  if (!donationItemInformation) {
    return (
      <SafeAreaView style={[globalStyle.flex, globalStyle.black]}>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[globalStyle.flex, ]}>
      <ScrollView showsHorizontalScrollIndicator={false} style={style.container}>
        <BackButton style={globalStyle.arrow} onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }} // <-- Just this
          style={style.image}
        />
        <Text style={style.text}>{donationItemInformation.name}</Text>
        <Text style={style.text}>{donationItemInformation.description}</Text>
        <Text style={style.text}>{donationItemInformation.price}</Text>
        <Text style={style.text}>{donationItemInformation.category}</Text>
      </ScrollView>
      <Button title ={"Donate"} style={style.button}/>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
