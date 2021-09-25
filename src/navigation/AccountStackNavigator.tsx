import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Routes} from './Routes'

import {AccountOverviewScreen} from '../views/Accounts/AccountOverview'
import {CreateAccountScreen} from '../views/Accounts/CreateAccountScreen'
import {SendCoinsScreen} from '../views/Accounts/SendCoinsScreen'

const Stack = createNativeStackNavigator()

export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.AccountOverview}>
      <Stack.Screen
        name={Routes.AccountOverview}
        component={AccountOverviewScreen}
      />
    </Stack.Navigator>
  )
}
