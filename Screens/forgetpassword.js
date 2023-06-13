import { Text, TextInput, View, StyleSheet,TouchableOpacity } from "react-native"
import ImageForm from "../components/Image"
import PageTitle from "../components/title"
import MineButton from "../components/Button"

function ForgetPassword({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.ImageContiner}><ImageForm></ImageForm></View>
            <View style={styles.TextContiner}><PageTitle title={'Forget '}/>
            <PageTitle title={'Password?'}/>
            
            </View>
            <View style={{paddingVertical:30}}><Text>Don't Worry its Happens please enter the Address associatred with your Account</Text></View>
            
            <View style={styles.FormContiner}>
                <TextInput style={styles.InputFeild} placeholder="Email"/>
                
            <MineButton title={"Submit"}/>

            
            <View style={styles.row}>
        <Text>Back To Login</Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}> Login</Text>
        </TouchableOpacity>
        
      </View>




            </View>
            
        </View>
    )
}
export default ForgetPassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20,
      paddingVertical:40
      
      
    },
    ImageContiner:{
        flex:3,
        
    },
    TextContiner:{
        flex:1.2,
        
    },
    FormContiner:{
        flex:4,
        
        
    }
    ,InputFeild:{
        borderBottomWidth:1,
        height:43,
        marginVertical:10

    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        justifyContent:"center"
      },
      link: {
        fontWeight: 'bold',
        
      },
  })