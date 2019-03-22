import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Comment from './Comment';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Comment
          commentData={{
            ownerName: 'Mohamed Salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          }}
        />
        <Comment
          commentData={{
            ownerName: 'Ahmed Lashin',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          }}
        />
        <Comment
          commentData={{
            ownerName: 'Kamal Hossam',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          }}
        />

        <Comment
          commentData={{
            ownerName: 'Mariam Hisham',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
             'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.,'
          }}
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
