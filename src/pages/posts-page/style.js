import styled from "styled-components";
import { themeColors } from "../../config/config";
import TruecallerBlogImage from "../../assets/images/header.jpg";

export const PostsPageWrapper = styled.div`
  .img-container {
    color: ${themeColors.white};
    font-size: 60px;
    font-weight: bolder;
    height: 500px;
    background: url(${TruecallerBlogImage}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
  }

  .blog-img {
    width: 100vw;
    height: 550px;
    object-fit: cover;
  }
`;

export const PostsPageSection = styled.div`
  padding: 0 80px;
  .title {
    font-size: 60px;
    font-weight: bold;
    padding: 20px 0;
  }
`;
