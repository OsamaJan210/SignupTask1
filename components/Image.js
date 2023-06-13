import { View, Text,Image } from "react-native"
function ImageForm(){
    return(
        <View style={{alignItems:"center", paddingTop:20 }}>
            <Image
        source={require('../assets/Image/img.png')}
        style={{ width: 200, height: 200, justifyContent:"center",alignItems:"center" }}
      />
        </View>
    )
}
export default ImageForm;