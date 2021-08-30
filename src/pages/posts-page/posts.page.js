import React from "react";

import CategoryContainer from "../../components/category-component/category.container";
import PostContainer from "../../components/post-component/post.container";

import { messages } from "../../config";
import { PostsPageWrapper, PostsPageSection } from "./style";

const PostsPage = () => {
  return (
    <PostsPageWrapper>
      <div className="img-container"> {messages.TRUECALLER_BLOG} </div>
      <PostsPageSection>
        <div className="title">{messages.LATEST_ARTICLES}</div>
        <CategoryContainer />
        <PostContainer />
      </PostsPageSection>
    </PostsPageWrapper>
  );
};

export default PostsPage;
