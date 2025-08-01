import React from "react";
import { Pressable, SafeAreaView, Text, View, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFirstName } from "../../redux/reducers/User";


const Home = () => {
  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle. backgroudWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: "Ayush"}))
      }>
        <Text>
          press me to change name
        </Text>
      </Pressable>
    </SafeAreaView>
)}

export default Home;
