import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from '../screen/about';

const screens = {
    About:{
        screen:AboutScreen,
        navigationOptions:{
            title: "About Review App",
            headerStyle:{
                backgroundColor:"#eee",
            },
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:"green",
        headerStyle:{
            backgroundColor:"#eee",
            height:60,
        }
    }
})

export default AboutStack
