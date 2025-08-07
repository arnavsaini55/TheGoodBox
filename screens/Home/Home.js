import React from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { returnToInitialtate, updateFirstName, User } from "../../redux/reducers/User";
import style from "./Style";
import Search from "../../Components/Search/Search";
import { verticalScale } from "../../assets/styles/scaling";
import Tab from "../../Components/Tab/Tab";
import { updateSelectedCategoryId } from "../../redux/reducers/Categories";



const Home = () => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector( state => state.categories);
  console.log(categories)
  // console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroudWhite, globalStyle.flex]}>
      <ScrollView>
        <View>
          <View>
          <Text style={style.HelloContainer}>
            Hello,
          </Text>
          <View style ={style.userName}>
          <Header title={user.firstName + ' ' + user.lastName[0]+'.'+'👋🏻'}/>
          </View>
          </View>
          <View style={style.searchBox}>
        <Search onSearch={(text) => console.log("Search triggered:", text)} />
        </View>
        <Pressable  style={style.highlightedImageContainer}>
          <Image source={require('../../assets/images/highlighted_image.png')} resizeMode={'contain' } style={style.highlightedImage}/>
        </Pressable>
        <View style={style.categoryHeader} >
          <Header title = {'Selected Categories'} type={2} style ={ style.categoryHeader}/>
        </View>
        <View style={style.categories}>
          <FlatList horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories.categories}
          renderItem={({item}) =>(
            <View style={style.categoryItem} key={item.categoryId}>
              <Tab
              tabId={item.categoryId}
              onPress={value => dispatch(updateSelectedCategoryId(value))}
              title={item.name}
              isInactive={item.categoryId !== categories.selectedCategorId} />
            </View>
          )} >

          </FlatList>
        </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
)}

export default Home;
