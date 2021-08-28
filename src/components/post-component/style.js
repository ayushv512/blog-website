import styled from 'styled-components';
import { themeColors } from '../../config/config';

export const PostComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  
  .post-card {
     width: 350px;
     height: 300px;
     margin: 20px 0;
     border: 1px solid #f5f5f5;
     background-color: ${themeColors.white};
     box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);

     .post-title {
        margin: 10px 25px;
        line-height: 1.2;
        font-size: 16px;
        font-weight: 700;
        color: #212121;
        height: 40px;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
     }

     .post-date {
        margin: 10px 25px;
        color: #a8adaa;
        font-weight: 500;
     }
  }
`;
