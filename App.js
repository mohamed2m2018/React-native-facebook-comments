import React from 'react';
import { StyleSheet, View } from 'react-native';
import CommentsList from './CommentsList';

export default class App extends React.Component {
  state = {
    data: [
      {
        id: '1',
 
          ownerName: 'Mohamed Salah',
          ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
          content:
            'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          date: '13h ',
          likersIds:['1','2','3']
     
      },
      {
        id: '2',
      
          ownerName: 'Mohamed Salah',
          ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
          content:
            'hi, I am salah,hi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salahhi, I am salah',
          date: '13h ',
          likersIds:['2','3'],


          /*replies: [
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
          ],*/
        },
    
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <CommentsList 
        topMargin={50}
        data={data}
        onAddComment={()=>console.log('Comment Added')}
        currentUserId='1'

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
