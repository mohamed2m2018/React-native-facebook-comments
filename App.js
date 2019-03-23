import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import CommentsList from './CommentsList';
import { KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class App extends React.Component {
  state = {
    text: '',
    data: [
      {
        key: '1',
        commentData: {
          ownerName: 'Mohamed Salah',
          ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
          content:
            'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          date: '13h ',

         
        },
      },
      {
        key: '2',
        commentData: {
          ownerName: 'Mohamed Salah',
          ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
          content:
            'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          date: '13h ',

         
        },
      },
    ],
  };

  addComment = () => {
    let { data, text } = this.state;
    data.push({
      key: Math.random(),
      commentData: {
        ownerName: 'Ananoymus',
        ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
        content: text,
        date: '13h ',
      },
    })
    this.setState({
      data, 
    });
  };

  displayLikeCondition = (likersArray) => {
    //check if liker id equals to current user id
    founded = likersArray.filter((liker) => liker === 1);
    if (founded.length) return true;
    else return false;
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <CommentsList data={data} />
        <KeyboardAvoidingView behavior="padding" enabled>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#000',
              paddingBottom: 10,
            }}
          >
            <TextInput
              onChangeText={(text) => {
                this.setState({text});
              }}
              placeholderTextColor="#C3C5C8"
              style={{
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
              }}
              multiline={true}
              placeholder="Write a comment.."
            />
            <TouchableOpacity onPress={this.addComment}>
              <Icon
                style={{ marginTop: 13, marginLeft: -5, marginRight: 5 }}
                name="caretright"
                size={35}
                color="#3179E8"
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
