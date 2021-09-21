import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'

interface Props {
  title: string
  onPress: () => void
}

export const Button: React.FC<Props> = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </View>
  </TouchableOpacity>
)
