import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale,scaleFontSize } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: horizontalScale(24),
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: verticalScale(20),
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",  // vertical center
    },
    inputContainer: {
        marginVertical: verticalScale(10),
    },
    buttonContainer: {
        marginTop: verticalScale(30),
        boxSizing: 'border-box',
    },
    header: {
        marginTop: verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: scaleFontSize(10),
        fontFamily: getFontFamily('Inter-Regular',100),
    },
    button:{
        marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
    
});

export default styles;
