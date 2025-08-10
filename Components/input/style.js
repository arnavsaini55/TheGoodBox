import { StyleSheet } from "react-native";
import React from "react";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize,  } from "../../assets/styles/scaling";



const styles = StyleSheet.create({
    label:{
        fontFamily:getFontFamily('Inter_18pt-BoldItalic',400),
        color:'#36455A',
        fontSize:scaleFontSize(15),
        lineHeight:scaleFontSize(15)
    },
    input:{
        paddingVertical:scaleFontSize(10),
        borderBottomWidth:1,
        borderBottomColor:'rgba(167,167,167,0.5)',}
})



export default styles;