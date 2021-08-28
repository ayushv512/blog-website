import React from "react";

import CategoryContainer from "../../components/category-component/category.container";
import PostContainer from "../../components/post-component/post.container";

import { PostsPageWrapper, PostsPageSection } from "./style";
//import TruecallerBlogImage from "../../assets/images/header.jpg";

const PostsPage = () => {
  return (
    <PostsPageWrapper>
      <div className="img-container"> The Truecaller Blog </div>
      {/* <img className="blog-img" src={TruecallerBlogImage} alt="truecaller blog" /> */}
      <PostsPageSection>
        <div className="title">Latest articles</div>
        <CategoryContainer />
        <PostContainer />
      </PostsPageSection>
    </PostsPageWrapper>
  );
};

export default PostsPage;
