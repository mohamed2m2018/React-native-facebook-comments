import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    marginRight: '5%',
    marginBottom:20
  },

  image: {
    width: 50,
    height: 50,
    marginRight:10,
    marginLeft:10
  },

  wrapper: {
    flex:1,
    height: 'auto',
    backgroundColor: 'grey',
    borderRadius: 15,
    alignSelf: 'flex-start',
  },

  content: {
    padding: 10,
  },
}));
