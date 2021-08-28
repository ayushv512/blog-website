import styled from "styled-components";
import { themeColors } from "../../config/config";

export const PostDetailContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .featured-image {
    object-fit: cover;
    width: 100vw;
  }
`;

export const PostDescriptionSection = styled.div`
  margin: 0 auto;
  width: 50%;
  .title {
    margin: 25px 0;
    line-height: 1.2;
    font-size: 40px;
    font-weight: 700;
    color: ${themeColors.title};
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
      max-width: -webkit-fill-available !important;
   }
   
`;
