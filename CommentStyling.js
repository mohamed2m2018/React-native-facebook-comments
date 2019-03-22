import { StyleSheet } from 'react-native';
import colors from './colors';

export default (styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    marginRight: '5%',
    marginBottom: 20, //between each post
    marginTop:10
  },

 image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
  },

  replyImage: {
    width: 20,
    height: 20,
    marginRight:10,
    marginLeft:70 //10 3alshmal+50 elsora 2lly 3alshmal+10
  },

  wrapper: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#F2F3F5',
    borderRadius: 15,
    alignSelf: 'flex-start',
  },

  content: {
    padding: 10,
    paddingTop: 2,
  },
  commentOwner: {
    padding: 10,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
}));
