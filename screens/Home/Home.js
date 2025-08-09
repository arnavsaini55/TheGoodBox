import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { resetDonation } from "../../redux/reducers/Donation";
import { updateSelectedCategoryId } from "../../redux/reducers/Categories";
import DonationItem from "../../Components/SingleDonationItem/SingleDonationItem";
import style from "./Style";
import Search from "../../Components/Search/Search";
import { verticalScale } from "../../assets/styles/scaling";
import Tab from "../../Components/Tab/Tab";
import { Routes } from "../../navigation/Routes";
import { updateToupdatedStateId } from "../../redux/reducers/Donation";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";
import { getTheme } from "../../assets/styles/theme";

const Home = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const donation = useSelector((state) => state.donation);
  const isDarkMode = useSelector((state) => state.theme?.isDarkMode || false);
  const theme = getTheme(isDarkMode);

  const [donationItem, setDonationItem] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  // Filter donation items by selected category
  useEffect(() => {
    const items = donation.items.filter((value) =>
      value.categoryIds?.includes(categories.selectedCategorId)
    );
    setDonationItem(items);
  }, [categories.selectedCategorId, donation.items]);

  // Reset donation items on initial render
  useEffect(() => {
    dispatch(resetDonation());
  }, []);

  // Pagination for categories
  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize)
    );
    setCategoryPage((prev) => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.flex, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView>
        <View>
          {/* Header and greeting with toggle switch */}
          <View style={[style.headerContainer, { backgroundColor: theme.backgroundColor }]}>
            <View>
              <Text style={[style.HelloContainer, { color: theme.textSecondary }]}>Hello,</Text>
              <View style={style.userName}>
                <Header
                  title={`${user.firstName} ${user.lastName[0]}. 👋🏻`}
                  color={theme.textPrimary}
                />
              </View>
            </View>
            <ToggleSwitch />
          </View>

          {/* Search bar */}
          <View style={style.searchBox}>
            <Search onSearch={(text) => console.log("Search:", text)} />
          </View>

          {/* Highlighted banner image */}
          <Pressable style={style.highlightedImageContainer}>
            <Image
              source={require("../../assets/images/highlighted_image.png")}
              resizeMode="contain"
              style={style.highlightedImage}
            />
          </Pressable>

          {/* Category header */}
          <View style={style.categoryHeader}>
            <Header title="Selected Categories" type={2} color={theme.textPrimary} />
          </View>

          {/* Categories Tab List */}
          <View style={style.categories}>
            <FlatList
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if (isLoadingCategories) {
                  return;
                }
                console.log(
                  'User has reached the end and we are getting more data for page number ',
                  categoryPage,
                );
                setIsLoadingCategories(true);
                let newData = pagination(
                  categories.categories,
                  categoryPage,
                  categoryPageSize,
                );
                if (newData.length > 0) {
                  setCategoryList(prevState => [...prevState, ...newData]);
                  setCategoryPage(prevState => prevState + 1);
                }
                setIsLoadingCategories(false);
              }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
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

          {/* Donation Items */}
          {donationItem.length > 0 && (
          
            <View style={[style.donationItemsContainer, { backgroundColor: theme.backgroundColor }]}>
              {donationItem.map(value => (
                
      <View key={value.donationItemId} style={style.Container}>           
  <DonationItem 
    onPress={selectedDonationId =>  {
      dispatch(updateToupdatedStateId(selectedDonationId))
      navigation.navigate(Routes.SingleDonationItem)
    }}
    donationItemId={value.donationItemId}
    uri={value.image}
    donationTitle={value.name}
    badgeTitle={
  categories.categories.find(
    val => val.categoryId === categories.selectedCategorId
  )?.name 
}             
    price={parseFloat(value.price)}
  />
  </View>
))}  
   </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
