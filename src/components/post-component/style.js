import styled from "styled-components";
import { themeColors } from "../../config";
import { deviceWidths } from "../../constants";

export const PostsComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostCardWrapper = styled.div`
  width: 340px;
  margin: 20px 0;
  border: 1px solid ${themeColors.border};
  background-color: ${themeColors.white};
  box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);
  cursor: pointer;
  border-radius:4px;

  @media (max-width: ${deviceWidths.tabletWidth}) {
    width: 100%;
    margin: 15px 0;
  }
`;

export const PostCardImg = styled.img`
  width: 340px;
  height: 200px;

  @media (max-width: ${deviceWidths.tabletWidth}) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: ${deviceWidths.phoneWidth}) {
    height: 200px;
  }
`;

export const PostCardTitle = styled.div`
  margin: 10px 25px;
  line-height: 1.2;
  font-size: 16px;
  font-weight: 700;
  color: ${themeColors.title};
  height: 40px;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${deviceWidths.tabletWidth}) {
    margin: 10px 15px;
  }
`;

export const PostCardDate = styled.div`
  margin: 10px 25px;
  color: ${themeColors.date};
  font-weight: 500;

  @media (max-width: ${deviceWidths.tabletWidth}) {
    margin: 10px 15px;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Category = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
`;

export const Bullet = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  margin-right: 5px;
`;

export const CategoryLabel = styled.div``;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
