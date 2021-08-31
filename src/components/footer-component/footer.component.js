import React from "react";
import { FooterComponentWrapper } from "./style";
import { messages } from "../../config";

const FooterComponent = () => {
  return (
    <FooterComponentWrapper>
      &#169; {messages.FOOTER_TEXT}
    </FooterComponentWrapper>
  );
};

export default FooterComponent;
