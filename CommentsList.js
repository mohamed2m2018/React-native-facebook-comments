import React, { Component } from 'react';
import {
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Comment from './Comment';
import commentListStyling from './commentListStyling'
import Icon from 'react-native-vector-icons/AntDesign';

export default class CommentsList extends Component {
  state = { text: '' };

  addComment = () => {
    let { data } = this.props;
    const { text } = this.state;
    data.push({
      key: Math.random(),
      commentData: {
        ownerName: 'Ananoymus',
        ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
        content: text,
        date: '13h ',
      },
    });
    this.setState({
      data,
    });

    this.refs.TextInput.clear();
  };

  displayLikeCondition = (likersArray) => {
    //check if liker id equals to current user id
    founded = likersArray.filter((liker) => liker === 1);
    if (founded.length) return true;
    else return false;
  };
  render() {
    const { data } = this.props;

    return (
      <View style={commentListStyling.mainContainer}>
        <FlatList
          ref="flatList"
          onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
          extraData={this.props}
          data={data}
          renderItem={(info) => (
            <Comment
              commentData={info.item.commentData}
              displayLike={false}
            />
          )}
        />
        <KeyboardAvoidingView behavior="padding" enabled>
          <View
            style={commentListStyling.textInputContainer}
          >
            <TextInput
              ref="TextInput"
              onChangeText={(text) => {
                this.setState({ text });
              }}
              placeholderTextColor="#C3C5C8"
              style={commentListStyling.textInput}
              multiline={true}
              placeholder="Write a comment.."
            />
            <TouchableOpacity onPress={this.addComment}>
              <Icon
                style={commentListStyling.icon}
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

