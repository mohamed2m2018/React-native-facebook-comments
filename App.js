import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Comment from './Comment';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Comment
          commentData={{
            ownerName: 'salah',
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            content:
              'hi, I am salah',
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
    justifyContent:'center'
  
  },
});
