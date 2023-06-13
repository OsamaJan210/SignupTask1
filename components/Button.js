import { Text, View,StyleSheet, Pressable } from "react-native"
function MineButton(props){
    return(
        <Pressable>
            <View style={styles.body}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        </Pressable>
    )

}
export default MineButton;
const styles=StyleSheet.create({
    body:{
        borderRadius:10,
        backgroundColor:'#4A88F7',
        width:'100%',
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:20


    },
    text:{
        fontSize:16,
        color:'white',
        fontWeight:400
    }
})