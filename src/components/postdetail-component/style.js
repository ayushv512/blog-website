import styled from "styled-components";
import { themeColors } from "../../config";
import { deviceWidths } from "../../constants";

export const PostDetailContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostDetailImage = styled.img`
  width: 100vw;
  object-fit: cover;
  height: 500px;

  @media (max-width: ${deviceWidths.phoneWidth}) {
    object-fit: contain;
    height: auto;
  }
`;

export const PostDescriptionSection = styled.div`
  margin: 0 auto;
  width: 50%;

  @media (max-width: ${deviceWidths.tabletLandscapeWidth}) {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
  }

  @media (max-width: ${deviceWidths.phoneWidth}) {
    padding: 20px;
  }
`;

export const PostDetailTitle = styled.div`
  margin: 25px 0;
  line-height: 1.2;
  font-size: 40px;
  font-weight: 700;
  color: ${themeColors.title};

  @media (max-width: ${deviceWidths.phoneWidth}) {
    margin: 0px;
    font-size: 20px;
  }
`;


export const AuthorDetailsSection = styled.div`
  display: flex;
  margin: 25px 0;
  align-items: center;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .name-date {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 16px;
      line-height: 1.3;
      font-weight: 600;
      color: ${themeColors.title};
    }
    .date {
      color: ${themeColors.date};
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const PostDetailContent = styled.div`
  margin: 25px 0;
  img {
    display: flex;
    margin: 0 auto;
    max-width: fit-content; 
    max-width: -webkit-fill-available;
    max-width: -moz-available;
    height: auto;
  }
  .wp-block-embed {
    margin: 0px;
  }
  .wp-block-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  iframe {
    width: -webkit-fill-available;
    width: -moz-available;
  }
`;
