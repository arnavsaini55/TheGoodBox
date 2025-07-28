import React from "react";
import { SafeAreaView, Text, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Header/Button/Button";
import style from "../../Components/Header/Button/style";

const Home = () =>{
    return<SafeAreaView style={[globalStyle.backgroudWhite,globalStyle.flex]} >       
           <Header title={'Arnav S.'} types={1}/>
           <Button title ={'Donate'} style={style.button} />
           <Button title ={'Donate'} isDisabled={true}/>
    </SafeAreaView>
}

export default Home;
