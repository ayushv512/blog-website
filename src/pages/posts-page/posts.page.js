import React from "react";

import CategoryContainer from "../../components/category-component/category.container";
import PostContainer from "../../components/post-component/post.container";

// import {  } from "./style";
//import TruecallerBlogImage from "../../assets/images/header.jpg";

const PostsPage = () => {
  return (
    <div>
      <div className="img-container"> The Truecaller Blog </div>
      {/* <img className="blog-img" src={TruecallerBlogImage} alt="truecaller blog" /> */}
      <div className="main-section">
        <div className="title">Latest articles</div>
        <CategoryContainer />
        <PostContainer />
      </div>
    </div>
  );
};

export default PostsPage;
