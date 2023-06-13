import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import ImageForm from "../components/Image"
import PageTitle from "../components/title"
import MineButton from "../components/Button"

function Register({navigation}){
    const imagepath='../assets/Image/img.png'
    return(
        <View style={styles.container}>
            <View style={styles.ImageContiner}>
                <ImageForm imagepath={imagepath}/>
                </View>
            <View style={styles.TextContiner}><PageTitle title={'Sign up'}/></View>
            
            <View style={styles.FormContiner}>
                <TextInput style={styles.InputFeild} placeholder="Email"/>
                <TextInput style={styles.InputFeild} placeholder="Full Name"/>
                <TextInput style={styles.InputFeild}placeholder="Mobile"/>
                <Text>By Signiung up, you're agree to our Terms & Condition and Privacy Policy</Text>
            <MineButton title={"Continue"}/>

            <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

            
            </View>
            
        </View>
    )
}
export default Register

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
      },
      link: {
        fontWeight: 'bold',
        
      },
  })