import React from "react";

import HeaderComponent from "../../components/header-component/header.component";
import FooterComponent from "../../components/footer-component/footer.component";
import AppRouter from "../../app.router";

import { LandingPageWrapper, MainSection } from "./style";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeaderComponent />
      <MainSection>
        <AppRouter />
      </MainSection>
      <FooterComponent />
    </LandingPageWrapper>
  );
};

export default LandingPage;
