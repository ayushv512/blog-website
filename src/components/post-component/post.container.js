import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostGetAction } from "../../actions";
import PostComponent from "./post.component";

const mapStateToProps = state => ({
  postsList: state.postsList.posts,
  categoriesColor: state.categoriesColorList.categoriesColor
});

const mapDispatchToProps = dispatch => ({
  postGetAction: bindActionCreators(PostGetAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
