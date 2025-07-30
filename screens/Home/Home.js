import React from "react";
import { SafeAreaView, Text, View, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Tab from "../../Components/Tab/Tab";
import Badge from "../../Components/Badge/Badge";
import Style from "./Style";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Search from "../../Components/Search/Search";
import DonationItem from "../../Components/SingleDonationItem/SingleDonationItem";
import { horizontalScale } from "../../assets/styles/scaling";


const Home = () =>{
    return<SafeAreaView style={[globalStyle.backgroudWhite,globalStyle.flex]} >       
          {/* <Search 
        onSearch={value => {
          console.log(value);
        }}
      /> */}
          <View  style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}>
     <DonationItem uri={'https://imgs.search.brave.com/8UIi4D0gJbxs8H4eLVk6dD4StWKYpmE0H73UA53uhjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzY5LzQxLzE2/LzM2MF9GXzExNjk0/MTE2ODlfaGI5eEpv/MndHeGlrSVQ0V1ZJ/TjE4Z3hpYThtQmhQ/QkEuanBn'} 
     badgeTitle={"Environment"} donationTitle ={"Tree Cactus"} Price = {51}/>
     
         </View>  
           
           
    </SafeAreaView>
}

export default Home;
