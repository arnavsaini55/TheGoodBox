import React from "react";
import { SafeAreaView, Text, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";

const Home = () =>{
    return<SafeAreaView style={[globalStyle.backgroudWhite,globalStyle.flex]} >       
           <Header title={'Arnav S.'} types={1}/>
    </SafeAreaView>
}

export default Home;
