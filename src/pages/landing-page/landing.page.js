import React from "react";

import HeaderComponent from "../../components/header-component/header.component";
import FooterComponent from "../../components/footer-component/footer.component";
import AppRouter from '../../app.router';

import { LandingPageWrapper } from "./style";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeaderComponent />
        <AppRouter />
      <FooterComponent />
    </LandingPageWrapper>
  );
};

export default LandingPage;
