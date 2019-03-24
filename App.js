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
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <CommentsList data={data} />
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
