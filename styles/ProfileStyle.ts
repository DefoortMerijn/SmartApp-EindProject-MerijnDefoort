import { StyleSheet } from 'react-native'
import color from './globalStyles/color'

export const ProfileStyle = StyleSheet.create({
  LogoutButton: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: color.dark,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  LogoutButtonText: {
    color: color.light,
    textAlign: 'center',
    fontFamily: 'GothamSSm-Medium',
  },
  Label: {
    fontFamily: 'GothamSSm-Medium',
    fontSize: 16,
    color: color.dark,
  },
  Value: {
    fontFamily: 'GothamSSm-Light',
    fontSize: 14,
    color: color.gray[800],
  },
  Image: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  Title: {
    fontFamily: 'GothamSSm-Bold',
    fontSize: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    color: color.dark,
  },
  ProfileView: { flex: 1, marginTop: 20 },
})
