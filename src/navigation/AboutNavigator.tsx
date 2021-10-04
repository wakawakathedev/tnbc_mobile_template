import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Routes} from './Routes'

import {CreateAccountScreen} from '@views/Accounts/CreateAccountScreen'
import {ImportAccountScreen} from '@views/Accounts/ImportAccountScreen'
import {ExportAccountScreen} from '@views/Accounts/ExportAccountScreen'
import {SendCoinsScreen} from '@views/Accounts/SendCoinsScreen'
import {AboutScreen} from '@views/About'
import {MoreInfoScreen} from '@views/MoreInfoScreen/MoreInfoScreen'

const Stack = createNativeStackNavigator()

export const AboutStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.About}>
      <Stack.Screen name={Routes.About} component={AboutScreen} />
      <Stack.Screen
        name={Routes.CreateAccount}
        component={CreateAccountScreen}
      />
      <Stack.Screen
        name={Routes.ExportAccount}
        component={ExportAccountScreen}
      />
      <Stack.Screen
        name={Routes.ImportAccount}
        component={ImportAccountScreen}
      />
      <Stack.Screen name={Routes.SendCoins} component={SendCoinsScreen} />
      <Stack.Screen name={Routes.MoreInfo} component={MoreInfoScreen} />
    </Stack.Navigator>
  )
}
