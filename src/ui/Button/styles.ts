import { StyleSheet } from 'react-native'
import { Colors } from '../Colors'

export const styles = StyleSheet.create({
  primaryButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  disabled: {
    borderColor: Colors.grey,
    color: Colors.grey,
    opacity: 0.7
  },
  primaryButtonText: {
    fontWeight: 'bold',
  },
})