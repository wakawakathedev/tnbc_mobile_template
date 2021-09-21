import React from 'react'
import {Text} from 'react-native'
import {TemplateScreen} from './utils/TemplateScreen'

export const HelloWorldScreen: React.FC = () => {
  return (
    <TemplateScreen>
      <Text>This serves as Welcome Screen</Text>
    </TemplateScreen>
  )
}
