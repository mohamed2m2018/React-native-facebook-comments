import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';

import commentStyling from './CommentStyling';

export default class Comment extends Component {
  render() {
    const { commentData } = this.props;
    const { content, ownerAvatar } = commentData;

    return (
      <View style={commentStyling.mainWrapper}>
        <Image style={commentStyling.image} source={{ uri: ownerAvatar }} />
        <View style={commentStyling.wrapper}>
          <Text style={commentStyling.content}>{content}</Text>
        </View>
      </View>
    );
  }
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    ownerName: PropTypes.string,
    ownerAvatar: PropTypes.string,
    content: PropTypes.string.isRequired,
  }),
  backgroundColor:PropTypes.string,
  textColor:PropTypes.string,

};
