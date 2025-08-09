import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

// Note: This will be used as a base style. Actual theme colors will be applied in components
const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
    marginBottom: verticalScale(0),
  },
});

export default globalStyle;
