import React, { Component } from 'react';

import { View,Text,Image } from 'react-native';


import PropTypes from 'prop-types';

import  commentStyling from './CommentStyling';




export default class Comment extends Component {

  render() {
    const {commentData}=this.props;
    const {content,ownerAvatar}=commentData

    return <View  style={commentStyling.wrapper}>
    <Text style={commentStyling.content}>{content}</Text>
    <Image style={{width:50,height:50}} source={{uri:ownerAvatar}}/>
    
    </View>;
  }
}


Comment.propTypes={

    commentData:PropTypes.shape({
      ownerName:PropTypes.string,
      ownerAvatar:PropTypes.string,
      content:PropTypes.string.isRequired,

    })
}
