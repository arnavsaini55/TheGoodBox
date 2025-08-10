import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
const style = StyleSheet.create({
    container: {
        marginTop: verticalScale(40),
        marginHorizontal: horizontalScale(55),
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20),    
        width: '100%',
        height: verticalScale(240),
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red',
    }
});


export default style;