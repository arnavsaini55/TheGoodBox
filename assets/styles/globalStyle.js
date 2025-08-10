import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

const globalStyle = StyleSheet.create({
  flex: {
    flex: 100,
    // marginBottom: verticalScale(0),
  },
  black: {
    backgroundColor: 'purple',
  },
  arrow: {
    marginTop: verticalScale(10),
  },
});

export default globalStyle;
