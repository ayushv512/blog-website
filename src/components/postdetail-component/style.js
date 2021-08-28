import styled from 'styled-components';
import { themeColors } from '../../config/config';

export const PostDetailContainerWrapper = styled.div`
    width: 100%;
    background-color: #f4f7f9;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-content: center;
    .featured-image {
        object-fit: cover;
        width: 100vw;
    }
    .post-description {
        margin: 0 auto;
        width: 50%;
        .title {
            margin: 25px 0;
            line-height: 1.2;
            font-size: 40px;
            font-weight: 700;
        }

        .author-details {
            display: flex;
            margin: 25px 0;
            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                margin-right: 20px;
            }

            .name-date{
                display: flex;
                flex-direction: column;
                .name {
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }
`