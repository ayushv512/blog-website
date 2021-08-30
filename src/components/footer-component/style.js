import styled from "styled-components";
import { themeColors } from "../../config";
import { deviceWidths } from "../../constants";

export const FooterComponentWrapper = styled.div`
  background-color: ${themeColors.footer};
  color: ${themeColors.white};
  padding: 30px;

  @media (max-width: ${deviceWidths.phoneWidth}) {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;
