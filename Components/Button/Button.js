import React from "react";
import { Pressable,Text } from "react-native";
import PropTypes from 'prop-types';
import style from "./style";


const Button = props =>{
    return (
 <Pressable disabled={props.isDisabled} style={style.button}>
       <Text style={[style.title, props.isDisabled && style.disabled]}>
        {props.title}
       </Text>
    </Pressable>
)}
    
   Button.default ={
    isDisabled: false,
   }
Button.propTypes ={
        title: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
    
}




export default Button;
