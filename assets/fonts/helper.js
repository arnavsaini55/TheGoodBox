export const getFontFamily = (baseFont = 'Inter_18pt-BoldItalic', weight)=>{
    switch (weight){
        case '100':
            return '${baseFont}-Thin';
              case '200':
            return '${baseFont}-ExtraThin';
              case '300':
            return '${baseFont}-Light';
              case '400':
                case 'normal':
                    return '${baseFont}-Regular';
              case '500':
            return '${baseFont}-Medium';
              case '600':
            return '${baseFont}-Bold';
              case '700':
                case 'bold':
            return '${baseFont}-Bold';
              case '800':
            return '${baseFont}-ExtraBold';
              case '900':
            return '${baseFont}-SemiBold';
            default:
                return'${baseFont}-Regular';
            }
}