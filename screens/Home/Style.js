import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    HelloContainer:{
        color:'#636776',
        marginTop: verticalScale(20),
        marginLeft: horizontalScale(17),
        marginBottom: verticalScale(0)
    },
    userName:{
        paddingTop: verticalScale(2),
        marginBottom: verticalScale(0)
    },
     profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
    marginBottom: verticalScale(0)
  },
   searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
   highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
    donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  
});

export default style;