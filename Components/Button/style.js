import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style =  StyleSheet.create({

    button:{
        backgroundColor:'#6930c3ff',
        height: verticalScale(55),
        justifyContent:'center',
        borderRadius: horizontalScale(50),
    },
    disabled:{
        opacity:0.5,
    },
    title:{
        color:'#FFFFFF',
        textAlign:'center',
        fontFamily:getFontFamily('Inter_18pt-Bold',500),
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),



    }
})


export default style;
