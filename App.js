import React from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';
import CommentsList from './CommentsList';
import { KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  displayLikeCondition = (likersArray) => {
    //check if liker id equals to current user id
    founded = likersArray.filter((liker) => liker === 1);
    if (founded.length) return true;
    else return false;
  };

  data = [
    {
      key: '1',
      commentData: {
        ownerName: 'Mohamed Salah',
        ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
        content:
          'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
        date: '13h ',

        replies: [
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
        ],
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

        replies: [
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
          {
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
            date: '13h ',
          },
        ],
      },
    },
  ];

  render() {
    return (
      <View style={styles.container}>
          <CommentsList data={this.data} />
          <KeyboardAvoidingView behavior="padding" enabled
>
          <View style={{flexDirection:"row"}}>
          <TextInput
            placeholderTextColor='#C3C5C8'
            style={{
              marginTop: 5,
              justifyContent: 'flex-end',
              bottom: 0,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: 'transparent',
              backgroundColor: '#F2F3F5',
              width: '90%',
              height: 50,
              alignSelf: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 5,
              fontSize:15
            }}
            placeholder="Write a comment.."
          />
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
