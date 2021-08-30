import styled from "styled-components";
import { themeColors } from "../../config";
import TruecallerBlogImage from "../../assets/images/header.jpg";
import { deviceWidths } from '../../constants';

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
    background-position: top;
  }

  @media (max-width:${deviceWidths.phoneWidth}) {
    .img-container {
      font-size: 30px;
      height: calc(100vh - 400px);
    }
  }
`;

export const PostsPageSection = styled.div`
  padding: 0 80px;
  .title {
    font-size: 60px;
    font-weight: bold;
    padding: 20px 0;
  }

  @media (max-width:${deviceWidths.tabletLandscapeWidth}) {
    padding: 0 40px;
  }

  @media (max-width:${deviceWidths.tabletWidth}) {
    padding: 0 100px;
  }
  
  @media (max-width:${deviceWidths.phoneWidth}) {
    padding: 0 30px;
    .title  {
      font-size: 30px;
      padding: 20px 0;
    }
  }
`;
