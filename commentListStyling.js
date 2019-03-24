import { StyleSheet } from 'react-native';
import colors from './colors';

export default (styles = StyleSheet.create({
  textInput: {
    marginTop: 5,
    justifyContent: 'flex-end',
    bottom: 0,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#F2F3F5',
    flex: 1,
    marginLeft: '3%',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 13,
    marginBottom: 5,
    fontSize: 15,
  },
  icon: { marginTop: 14, marginLeft: 5, marginRight: 7 },
  textInputContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    paddingBottom: 10,
  },
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
}));
