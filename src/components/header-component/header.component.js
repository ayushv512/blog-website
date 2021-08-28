import React from 'react';
import { HeaderComponentWrapper } from './style';
import TruecallerLogo from '../../assets/logotype/truecaller.svg'

const HeaderComponent = () => {
  return (
      <HeaderComponentWrapper>
          <img
            src={TruecallerLogo}
            width="140"
            height="35"
            srcSet=""
            alt="truecaller logo"
            className="logo"
           />
      </HeaderComponentWrapper>
  );
};

export default HeaderComponent;
