import { StyleSheet } from 'react-native'
import { Colors } from '../../ui/Colors'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 20,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: {
    display: 'flex',
    flex: 1,
    fontSize: 20,
    color: Colors.grey,
    fontWeight: 'bold',
  },
})