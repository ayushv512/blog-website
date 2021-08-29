import styled from "styled-components";
import { deviceWidths } from "../../constants";

export const HeaderComponentWrapper = styled.div`
  padding: 10px;

  @media (max-width: ${deviceWidths.phoneWidth}) {
    padding: 15px;
  }
`;
