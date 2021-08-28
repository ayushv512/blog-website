import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostGetAction, SetPaginationConfigAction } from "../../actions";
import PostComponent from "./post.component";

const mapStateToProps = state => ({
  postsList: state.postsList.posts,
  totalPostsCount: state.postsList.totalCount,
  categoriesColor: state.categoriesColorList.categoriesColor,
  paginationConfig: state.paginationConfig
});

const mapDispatchToProps = dispatch => ({
  postsGetAction: bindActionCreators(PostGetAction, dispatch),
  setPaginationConfigAction: bindActionCreators(SetPaginationConfigAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
