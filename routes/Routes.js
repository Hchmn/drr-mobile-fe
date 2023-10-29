import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Splash from '../screens/splash';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name='SplashScreen' component={Splash} options={{headerMode: 'none', headerShown : false}}/>
                <Stack.Screen name='LoginScreen' component={Login} options={{headerMode: 'none', headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;