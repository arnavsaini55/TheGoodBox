import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
    marginBottom: verticalScale(0),
  },
  black: {
    backgroundColor: 'purple',
  },
});

export default globalStyle;
