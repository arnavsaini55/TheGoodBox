import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale } from "../../assets/styles/scaling"; // adjust path as needed
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  container: {
    flex: 1,                 // fills the available space fully
    backgroundColor: 'white',
    paddingHorizontal: 0,    // no horizontal padding to avoid gaps
  },
  image: {
    width: '100%',           // full width of the container
    height: verticalScale(300),  // scaled height for device size
    borderRadius: 15,        // rounded corners
    resizeMode: 'cover',     // scale image nicely without distortion
    marginVertical: verticalScale(20), // vertical spacing above and below image
  },
  text: {
    fontFamily:getFontFamily('Inter_18pt-BoldItalic',500),
    fontSize: verticalScale(11),
    color: 'black',
    marginVertical: verticalScale(10),
  },
  button: {
    backgroundColor:'#6930c3ff',
        height: verticalScale(55),
        justifyContent:'center',
        borderRadius: horizontalScale(50),
  },
});

export default style;
