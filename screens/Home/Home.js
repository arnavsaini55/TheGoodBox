import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { returnToInitialtate, updateFirstName, User } from "../../redux/reducers/User";
import style from "./Style";
import Search from "../../Components/Search/Search";
import { verticalScale } from "../../assets/styles/scaling";



const Home = () => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroudWhite, globalStyle.flex]}>
      <ScrollView>
        <View>
          <View>
          <Text style={style.HelloContainer}>
            Hello,
          </Text>
          <View style ={style.userName}>
          <Header title={user.firstName + ' ' + user.lastName[0]+'👋🏻'}/>
          </View>
          </View>
          <View style={style.searchBox}>
        <Search/>
        </View>
        <Pressable  style={style.highlightedImageContainer}>
          <Image source={require('../../assets/images/highlighted_image.png')} resizeMode={'contain' } style={style.highlightedImage}/>
        </Pressable>
        </View> 
      </ScrollView>
    </SafeAreaView>
)}

export default Home;
