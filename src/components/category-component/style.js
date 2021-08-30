import styled from "styled-components";
import { deviceWidths } from "../../constants";
import { themeColors } from "../../config";

export const CategoryComponentWrapper = styled.div`
  width: 300px;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;

  &:after {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 9px solid #ccc;
    position: absolute;
    top: 40%;
    right: 15px;
    content: "";
    z-index: 98;
  }
  select {
    width: 320px;
    position: relative;
    z-index: 99;
    border: 1px solid ${themeColors.border};
    background: none;
    box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
    padding: 20px;
    font-size: 16px;

    &: focus {
      outline: none;
    }
  }

  @media (max-width: ${deviceWidths.tabletWidth}) {
    width: 100%;
    select {
      width: 120%;
    }
  }
`;
