import { Text, View,StyleSheet, Pressable, Image } from "react-native"
function MineImgButton(props){
    return(
        <Pressable>
            <View style={styles.body}>
            <Image
        source={require('../assets/Image/img.png')}
        style={{ width: 30, height: 30, marginRight:50, marginLeft:20 }}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        </Pressable>
    )

}
export default MineImgButton;
const styles=StyleSheet.create({
    body:{
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'#D3D3D3',
        width:'100%',
        height:40,
        alignItems:"center",
        // justifyContent:"center",
        marginVertical:20


    },
    text:{
        fontSize:16,
        color:'Black',
        fontWeight:400
    }
})