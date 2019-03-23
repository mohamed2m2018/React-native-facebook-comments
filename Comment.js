import React, { Component } from 'react';

import { View, Text, Image, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';

import commentStyling from './CommentStyling';

import Reply from './Reply';

export default class Comment extends Component {
  state = {
    likedNow: false,
  };

  renderReplies = (replies) => {
    return replies.map((reply, index) => (
      <View key={index}>
        <Reply reply={reply} />
      </View>
    ));
  };

  render() {
    const { commentData,displayLike } = this.props;
    const { content, ownerName, ownerAvatar, replies, date} = commentData;
    const { likedNow } = this.state;

    return (
      <View>
        <View style={commentStyling.mainWrapper}>
          <Image style={commentStyling.image} source={{ uri: ownerAvatar }} />
          <View style={commentStyling.wrapper}>
            <Text style={commentStyling.commentOwner}>{ownerName}</Text>
            <Text style={commentStyling.content}>{content}</Text>
          </View>
        </View>
        <View style={commentStyling.commentFooter}>
          <Text style={commentStyling.footerElement}>{date}</Text>

          {console.log(displayLike)}
          {(displayLike||likedNow) ? (
            <TouchableHighlight onPress={this.onPress}>
              <Text style={commentStyling.footerElementLiked}>Like</Text>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight onPress={this.onPress}>
              <Text style={commentStyling.footerElement}>Like</Text>
            </TouchableHighlight>
          )}

          <TouchableHighlight onPress={this.onPress}>
            <Text style={commentStyling.footerElement}>Reply</Text>
          </TouchableHighlight>
        </View>
        {replies ? this.renderReplies(replies) : null}
      </View>
    );
  }
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    ownerName: PropTypes.string.isRequired,
    ownerAvatar: PropTypes.string,
    content: PropTypes.string.isRequired,
    date: PropTypes.string,
    liked: PropTypes.bool,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        ownerName: PropTypes.string,
        ownerAvatar: PropTypes.string,
        content: PropTypes.string.isRequired,
        date: PropTypes.string,
      })
    ),
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  displayLike:PropTypes.bool
};
