
import { StackCardStyleInterpolator, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ProductScreen from '../screens/product/ProductScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';

export type RootStackParams = {
    LoadingScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    ProductScreen: { productId: string };
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
    return {
        cardStyle: {
            opacity: current.progress,
        },
    };
};


const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: fadeAnimation,
            }}
        >
            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation;
