import React from 'react'
import {Pressable, View} from 'react-native'

import {styles} from './styles'

interface CardProps {
  isShown?: boolean
  toggleShow?: (_: boolean) => void
  title?: React.ReactElement
}
export const Card: React.FC<CardProps> = ({
  children,
  isShown,
  toggleShow,
  title,
}) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => toggleShow && toggleShow(!isShown)}>
      {title && (
        <>
          {title}
          <View style={{display: isShown ? 'flex' : 'none'}}>{children}</View>
        </>
      )}

      {!title && children}
    </Pressable>
  )
}
