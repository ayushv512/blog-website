import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostGetAction } from "../actions";
import PostComponent from "../components/post-component/post.component";

const PostContainer = props => {
  useEffect(() => {
    props.postGetAction();
  }, []);

  return props.postsList && <PostComponent postsList={props.postsList} />;
};

const mapStateToProps = state => ({
  postsList: state.postsList.posts
});

const mapDispatchToProps = dispatch => ({
  postGetAction: bindActionCreators(PostGetAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
