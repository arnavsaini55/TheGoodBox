import React from "react";
import PropTypes from'prop-types';
import { Text, View } from "react-native";
import style from "./style";



const Header = props => {

    const styleToApply = () =>{
        switch(props.types){
            case 1: 
            return style.title1;
            case 2:
            return style.title2;
            case 3:
            return style.title3;
            default:
                return style.title1
        }
    };
return (
    <View>
        <Text style={[styleToApply(),props.color &&props.color && {color: props.color}]}>
            {props.title}
        </Text>
    </View>
);

};

Header.default ={
    title:'',
    types:'1',
    color: '#000000'
}
Header.PropTypes = {
    title: PropTypes.string,
    types: PropTypes.number,
    color: PropTypes.string,
}

export default Header;