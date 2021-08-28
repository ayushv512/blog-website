import React from "react";

import HeaderComponent from "../../components/header-component/header.component";
import FooterComponent from "../../components/footer-component/footer.component";
import CategoryContainer from "../../containers/category";
import PostContainer from "../../containers/post";

import { LandingPageWrapper } from "./style";
import TruecallerBlogImage from "../../assets/images/header.jpg";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeaderComponent />
        <div className="img-container"> The Truecaller Blog </div>
        {/* <img className="blog-img" src={TruecallerBlogImage} alt="truecaller blog" /> */}
        <div className="main-section">
            <div class="title">Latest articles</div>
            <CategoryContainer />
            <PostContainer />
        </div>
      <FooterComponent />
    </LandingPageWrapper>
  );
};

export default LandingPage;
