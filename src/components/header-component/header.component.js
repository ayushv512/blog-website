import React from "react";
import { HeaderComponentWrapper } from "./style";
import TruecallerLogo from "../../assets/logotype/truecaller.svg";

const HeaderComponent = () => {
  return (
    <HeaderComponentWrapper>
      <a href="/blogs">
        <img src={TruecallerLogo} width="140" height="35" alt="truecaller logo" />
      </a>
    </HeaderComponentWrapper>
  );
};

export default HeaderComponent;
