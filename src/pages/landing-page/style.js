import styled from 'styled-components';
import { themeColors } from '../../config/config';
import TruecallerBlogImage from '../../assets/images/header.jpg';

export const LandingPageWrapper = styled.div`
    width: 100%;
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
    }

    .blog-img {
        width: 100vw;
        height: 600px;
        object-fit: cover;
    }

    .main-section {
        background-color: #f4f7f9;
        padding: 0 40px;
        .title {
            font-size: 60px;
            font-weight: bold;
            padding: 20px 0;
        }
    }

`;
