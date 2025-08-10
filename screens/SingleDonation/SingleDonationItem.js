import React from 'react';
import globalStyle from '../../assets/styles/globalStyle';  
import BackButton from '../../Components/BackButton/BackButton';
import {useSelector} from 'react-redux';
import { Image, SafeAreaView, 
  ScrollView,
 } from 'react-native';
 import style from './Style';


const SingleDonationItem = ({navigation,route}) => {
  const donationItemInformation = useSelector(
    state => state.donation.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  
};

<SafeAreaView style={[globalStyle.flex, globalStyle.black]}>
  <ScrollView showsHorizontalScrollIndicator={false} style={style.container}>
    <BackButton onPress={() => navigation.goBack()} />
    console.log("https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80:", donationItemInformation?.image);
    <Image
  source={{ uri: donationItemInformation.image.url }}
  style={style.image}
/>
       
  </ScrollView>
</SafeAreaView>
 

export default SingleDonationItem;