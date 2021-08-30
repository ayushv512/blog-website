import React from "react";

import CategoryContainer from "../../components/category-component/category.container";
import PostContainer from "../../components/post-component/post.container";

import { messages } from "../../config";
import { PostsPageWrapper, PostsPageSection, PostsPageImgContainer, PostsPageSectionTitle } from "./style";

const PostsPage = () => {
  return (
    <PostsPageWrapper>
      <PostsPageImgContainer> {messages.TRUECALLER_BLOG} </PostsPageImgContainer>
      <PostsPageSection>
        <PostsPageSectionTitle>{messages.LATEST_ARTICLES}</PostsPageSectionTitle>
        <CategoryContainer />
        <PostContainer />
      </PostsPageSection>
    </PostsPageWrapper>
  );
};

export default PostsPage;
