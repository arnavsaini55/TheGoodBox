import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#30c3b5',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
    // backgroundColor: '#30c3b5',
  }
});

export default style;