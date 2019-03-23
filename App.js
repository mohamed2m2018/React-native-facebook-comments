import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CommentsList from './CommentsList';

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
        <TextInput
          style={{ justifyContent: 'flex-end', bottom: 0 }}
          placeholder="hi please write comment"
        />
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
