import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screens/Register';
import LogIn from './Screens/login';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ForgetPassword from './Screens/forgetpassword';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="StartScreen" component={Register} />
          <Stack.Screen name="LoginScreen" component={LogIn} />
          <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
