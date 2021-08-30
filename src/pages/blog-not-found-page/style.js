import styled from "styled-components";
import { themeColors } from "../../config";

export const PageNotFoundWrapper = styled.div`
    max-width: 80%;
    margin: auto;
    padding-top: 30px;
`;

export const Title = styled.div`
    margin-bottom: 24px;
`;

export const SubtextWrapper = styled.div`
    margin-bottom: 24px;
`;

export const GoToHomeButton = styled.button`
    background-color: ${themeColors.footer};
    color: ${themeColors.white};
    text-transform: uppercase;
    border-radius: 20px;
    padding: 12px;
    cursor: pointer;
    border: none;
    opacity: 0.8;
  
    &:hover {
        opacity: 1;
    }

`;
