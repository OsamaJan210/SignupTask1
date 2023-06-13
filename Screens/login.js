import { Text, TextInput, View, StyleSheet,TouchableOpacity } from "react-native"
import ImageForm from "../components/Image"
import PageTitle from "../components/title"
import MineButton from "../components/Button"
import MineImgButton from "../components/ImgButton"
import BackButton from "../components/backbutton"

function LogIn({navigation}){
    return(
        <View style={styles.container}>
            <BackButton goBack={navigation.goBack}  />
            <View style={styles.ImageContiner}><ImageForm></ImageForm></View>
            <View style={styles.TextContiner}><PageTitle title={'Login'}/></View>
            
            <View style={styles.FormContiner}>
                <TextInput style={styles.InputFeild} placeholder="Email"/>
                <TextInput style={styles.InputFeild}placeholder="Password"/>
                <TouchableOpacity onPress={() => navigation.replace('ForgetPasswordScreen')}>
          <Text style={styles.link}> Forget Password?</Text>
        </TouchableOpacity>
            <MineButton title={"Login"}/>

            <View Style={styles.r}> 
            <Text>OR</Text>
                
            </View>
            <MineImgButton title={"Login With Google"}/>
            <View style={styles.row}>
        <Text>New to Logistic?</Text>
        <TouchableOpacity onPress={() => navigation.replace('StartScreen')}>
          <Text style={styles.link}> Register</Text>
        </TouchableOpacity>
      </View>




            </View>
            
        </View>
    )
}
export default LogIn

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
      r:{
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:200
      }
  })