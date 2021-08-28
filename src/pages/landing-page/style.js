import styled from "styled-components";
import { themeColors } from "../../config/config";

export const LandingPageWrapper = styled.div`
  width: 100%;
`;

export const MainSection = styled.div`
  min-height: 100vh;
  background-color: ${themeColors.backgroundBody};
  color: ${themeColors.title};
`;
