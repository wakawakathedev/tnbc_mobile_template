import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Routes} from './Routes'
import {HelloWorldScreen} from '../views/HelloWorldScreen'
import {AccountOverviewScreen} from '../views/Accounts/AccountOverview'
import {MoreInfoScreen} from '../views/MoreInfoScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import {AccountStackNavigator} from './AccountStackNavigator'

const Tab = createBottomTabNavigator()

// TODO:
// Routes:
// - AccountOverview
//   - CreateAccount
//   - SendCoins
// - HelloWorld (Dashboard/Login)
// - MoreInfo (Settings Stack -> About us -> )

enum Icons {
  Home = 'home-outline',
  Account = 'wallet-outline',
  Help = 'settings-outline',
}

const pickIconName = (routeName: string) => {
  switch (routeName) {
    case Routes.Home:
      return Icons.Home
    case Routes.AccountStack:
      return Icons.Account
    default:
      return Icons.Help
  }
}

export const RootNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          const iconName = pickIconName(route.name)
          return <Ionicons name={iconName} size={20} />
        },
      })}>
      <Tab.Screen name={Routes.Home} component={HelloWorldScreen} />
      <Tab.Screen
        name={Routes.AccountStack}
        component={AccountStackNavigator}
        options={{headerShown: false, unmountOnBlur: true}}
      />
      <Tab.Screen name={Routes.About} component={MoreInfoScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)
