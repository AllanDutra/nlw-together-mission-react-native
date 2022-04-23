import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            {/* Por padrão o primeiro Screen é a primeira tela a ser exibida */}
            <Screen
                name="SignIn"
                component={SignIn}
            />

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />

            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />

        </Navigator>
    )
}