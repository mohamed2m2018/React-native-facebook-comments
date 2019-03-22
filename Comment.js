import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';

import commentStyling from './CommentStyling';

export default class Comment extends Component {
  render() {
    const { commentData } = this.props;
    const { content, ownerName, ownerAvatar, replies } = commentData;

    return (
      <View style={commentStyling.mainWrapper}>
        <Image style={commentStyling.image} source={{ uri: ownerAvatar }} />
        <View style={commentStyling.wrapper}>
          <Text style={commentStyling.commentOwner}>{ownerName}</Text>
          <Text style={commentStyling.content}>{content}</Text>
        </View>
        {replies ? (
          <View style={commentStyling.wrapper}>
            <Text style={commentStyling.content}>{content}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    ownerName: PropTypes.string.isRequired,
    ownerAvatar: PropTypes.string,
    content: PropTypes.string.isRequired,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        ownerName: PropTypes.string,
        ownerAvatar: PropTypes.string,
        content: PropTypes.string.isRequired,
      })
    ),
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
