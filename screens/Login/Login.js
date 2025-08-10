import React,{useState} from "react";
import { ScrollView,SafeAreaView } from "react-native";
import style from "./style";

import Input from "../../Components/input/input";

const Login = () => {

    const [email,setEmail] = useState('');
    console.log(email);
    return <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
               <Input 
               placeholder={'Enter Your Username'} label={'Email'}
               onChangeText= {value => setEmail(value)}
               keyboardType={'email-address'}
               />
        </ScrollView>
    </SafeAreaView>
}



export default Login;