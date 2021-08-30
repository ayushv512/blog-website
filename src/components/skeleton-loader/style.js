import styled from "styled-components";
import { themeColors } from "../../config";
import { deviceWidths } from "../../constants";

export const SkeletonHolderWrapper = styled.div`
  .posts-loader {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .bars {
      width: 340px;
      margin: 20px 0;
      border: 1px solid ${themeColors.border};
      background-color: ${themeColors.white};
      box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);
      .bar {
        background: #bdc1c3;
        margin: 5px;
        box-sizing: border-box;
      }
      .bar1 {
        width: 50%;
        height: 30px;
      }
      .bar2 {
        width: 90%;
        height: 200px;
      }
      .bar3 {
        width: 90%;
        height: 40px;
      }
      .bar4 {
        width: 30%;
        height: 18px;
      }
    }
  }

  .post-details-loader {
    margin: 0 auto;
    width: 50%;
    .bars {
      width: 100%;
      .bar {
        background: #bdc1c3;
        margin: 5px;
        box-sizing: border-box;
      }
      .bar1 {
        width: 100%;
        height: 50px;
      }
      .bar2 {
        width: 30%;
        height: 50px;
      }
      .bar3 {
        width: 100%;
        height: 100px;
      }
      .bar4 {
        width: 100%;
        height: 100px;
      }
    }
  }

  .loading {
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      background-color: #dddfe2;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      transform: translateX(0);
      animation: 5s loading-placeholder ease-in-out infinite;
    }
  }

  @keyframes loading-placeholder {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @media (max-width: ${deviceWidths.tabletWidth}) {
    .posts-loader {
      .bars {
        width: 100%;
        box-sizing: border-box;
        .bar2 {
          height: 300px;
        }
      }
    }
    .post-details-loader {
      margin: 0 auto;
      width: 100%;
      .bars {
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }

  @media (max-width: ${deviceWidths.phoneWidth}) {
    .posts-loader {
      .bars {
        .bar2 {
          height: 200px;
        }
      }
    }
  }
`;
