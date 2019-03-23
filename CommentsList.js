import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Comment from './Comment';

export default class CommentsList extends Component {
  render() {
    const { data, displayLikeCondition } = this.props;

    return (
      <FlatList
        ref="flatList"
        onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
        extraData={this.props}
        data={data}
        renderItem={(info) => (
          <Comment
            commentData={info.item.commentData}
            displayLike={console.log(info)}
          />
        )}
      />
    );
  }
}
