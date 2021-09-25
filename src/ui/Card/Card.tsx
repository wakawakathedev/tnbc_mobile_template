import React from 'react'
import { View } from 'react-native'

import {styles} from './styles'

export const Card: React.FC = ({ children }) => {
  return (<View style={styles.card}>{children}</View>)
}