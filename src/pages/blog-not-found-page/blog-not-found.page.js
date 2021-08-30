import React from "react";
import { useHistory } from "react-router-dom";
import { messages } from "../../config";

import {
  PageNotFoundWrapper,
  Title,
  SubtextWrapper,
  GoToHomeButton
} from "./style";

const PageNotFound = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/blogs");
  };

  return (
    <PageNotFoundWrapper>
      <Title>
        <h1>{messages.PAGE_NOT_FOUND}</h1>
      </Title>
      <div>
        <SubtextWrapper>{messages.PAGE_NOT_FOUND_SUBTEXT}</SubtextWrapper>
        <div>
          <GoToHomeButton onClick={goToHomePage}>
            {messages.GOTO_HOMEPAGE}
          </GoToHomeButton>
        </div>
      </div>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
