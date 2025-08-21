import React, { useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import style from "./style";
import Input from "../../Components/input/input";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import BackButton from "../../Components/BackButton/BackButton";
import Routes from "../../navigation/Routes"; // ✅ Changed to default import
import { createUser } from "../../api/user";

const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={style.container}>
      <Pressable  onPress={() => navigation.goBack()}>
        <BackButton  style={style.button}/>
      </Pressable>

      <View style={style.centerContainer}>
        <View style={style.headerContainer}>
          <Header type="3" title="Welcome to The Good Box" />
        </View>

        <View style={style.inputContainer}>
          <Input
            placeholder="Enter your email"
            label="Create your Username"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
        </View>

        <View style={style.inputContainer}>
          <Input
            placeholder="***"
            label="Phone number"
            onChangeText={value => setPhoneNumber(value)}
            keyboardType="phone-pad"
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

       <Button style={style.buttonContainer}
          title={'Start Something Good'} onPress={async () => await createUser(fullname, email, password)} 
           />
      </View>
    </SafeAreaView>
  );
};

export default Registration;
