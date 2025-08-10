import React, { useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import style from "./style";
import Input from "../../Components/input/input";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Text } from "react-native-gesture-handler";
import { Routes } from "../../navigation/Routes";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={style.container}>
            <View style={style.centerContainer}>
                <View style={style.headerContainer}>
                    <Header type="3" title="Welcome Back Pure Soul." />
                </View>

                <View style={style.inputContainer}>
                    <Input
                        placeholder="Enter Your Username"
                        label="Email"
                        onChangeText={value => setEmail(value)}
                        keyboardType="email-address"
                    />
                </View>

                <View style={style.inputContainer}>
                    <Input
                        placeholder="Enter Your Password"
                        label="Password"
                        onChangeText={value => setPassword(value)}
                        secureTextEntry
                    />
                </View>
                    <View style={style.buttonContainer}>
                   <Button title={'Login'}/>
                   </View>
                   
                   <View style={style.header}>
                    <Pressable onPress={() => navigation.navigate(Routes.Registration)}>
                        <Text>
                        Don't have an account?</Text> 
                        </Pressable>
                    </View>
                     </View>
        </SafeAreaView>
    );
};

export default Login;
