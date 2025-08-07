import {React,useState,useEffect} from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View, } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { resetDonation } from "../../redux/reducers/Donation";
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
  const donation = useSelector( state => state.donation);
  const [donationItem,setdonationItem] = useState([])
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect (() => {
    const items = donation.items.filter(value => 
      value.categoryId  === categories.selectedCategorId,
    )
    setdonationItem(items) 
  },
[categories.selectedCategorId]
)

  console.log('this is our donation state', donation)

  // dispatch(resetDonation())

  useEffect(() => {
  dispatch(resetDonation());
}, []);

  useEffect (() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(categories.categories,categoryPage,categoryPageSize)
    );
    setCategoryPage(prev => prev + 1);
     setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
    
  }
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
       
        
       
        </View> 
      </ScrollView>
    </SafeAreaView>
)}

export default Home;
