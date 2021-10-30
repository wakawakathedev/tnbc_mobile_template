import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'

interface Props {
  title: string
  onPress: () => void
  disabled?: boolean
}

export const Button: React.FC<Props> = ({disabled, title, onPress}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={[styles.primaryButton, disabled && styles.disabled]}>
      <Text style={[styles.primaryButtonText, disabled && styles.disabled]}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
)
