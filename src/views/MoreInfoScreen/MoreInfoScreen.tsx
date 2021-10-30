import React from 'react'
import {Text, View} from 'react-native'
import {TemplateScreen} from '@views/utils/TemplateScreen'

export const MoreInfoScreen: React.FC = () => (
  <TemplateScreen>
    <View style={{padding: 20}}>
      <View style={{padding: 10, borderWidth: 1, borderColor: 'red'}}>
        <Text>
          This template was created with ♥ by wakawakathedev on behalf of
          tnbcrow in 2021.
        </Text>
      </View>
    </View>
  </TemplateScreen>
)
