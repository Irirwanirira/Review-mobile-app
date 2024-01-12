import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screen/home';
import ReviewDetailsApp from '../screen/reviewDetails';
import AboutScreen from '../screen/about';

const screens = {
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            title: "Share Your Review",
            headerStyle:{
                backgroundColor:"#eee",
            },
        }
    },
    ReviewDetails:{
        screen:ReviewDetailsApp,
        navigationOptions:{
            title: "Review Details",
            headerStyle:{
                backgroundColor:"#eee",
            },
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:"green",
        headerStyle:{
            backgroundColor:"#eee",
            height:60,
        }
    }
})

export default createAppContainer(HomeStack)






 



















