import styled from 'styled-components';
import { themeColors } from '../../config/config';

export const PostsComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostsCardWrapper = styled.div`
   width: 340px;
   margin: 20px 0;
   border: 1px solid #f5f5f5;
   background-color: ${themeColors.white};
   box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);
   cursor: pointer;
`;

export const PostsCardTitle = styled.div`
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
`;

export const PostsCardDate = styled.div`
   margin: 10px 25px;
   color: ${themeColors.date};
   font-weight: 500;
`;

export const CategoriesSection = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Category = styled.div`
   display:flex;
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