/**
 * todo
 * - show/hide wallet balance
 * - show/hide total balance
 */

import React, {useState} from 'react'
import {Pressable, Text, View} from 'react-native'

import {Card} from '@ui/Card'

export const AccountBalance: React.FC = () => {
  const [isShown, toggleShow] = useState<boolean>(false)
  return (
    <Card
      isShown={isShown}
      toggleShow={toggleShow}
      title={<Text>AccountBalance</Text>}>
      <View>
        <Text>Hello</Text>
      </View>
    </Card>
  )
}
