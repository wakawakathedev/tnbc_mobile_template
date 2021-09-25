import React from 'react'
import { View } from 'react-native'

import {styles} from './styles'

export const CardContainer: React.FC = ({children}) => (<View style={styles.cardContainer}>{children}</View>)