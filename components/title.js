import { cloneElement } from "react";
import { View, Text, StyleSheet } from "react-native"
function PageTitle(props){
    return(
        <View style={styles.body}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
export default PageTitle;

const styles=StyleSheet.create({
    body:{
        alignContent:"center"
    },
    title:{
        fontWeight:600,
        fontSize:42,
        // fontWeight:400,
        // justifyContent:"center"
        
    }

})