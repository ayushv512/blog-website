import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  PostDetailContainerWrapper,
  PostDescriptionSection,
  AuthorDetailsSection,
  PostDetailContent,
  PostDetailImage,
  PostDetailTitle
} from "./style";

import LoadingComponent from "../loading-component/loading-component";
import { IMAGE_NOT_FOUND_URL } from "../../constants/index";
import { formatDate } from "../../utils";

const PostDetailComponent = props => {
  const history = useHistory();
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    props.postDetailGetAction(slug);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.postDetail === "error") {
      // route to page not foundß
      history.push("/page-not-found");
    }
  }, [props.postDetail]); // eslint-disable-line react-hooks/exhaustive-deps

  return props.loading ? (
    <LoadingComponent />
  ) : (
    props.postDetail && props.postDetail !== "error" && (
      <PostDetailWrapper {...props} />
    )
  );
};

const PostDetailWrapper = props => {
  let {
    author: { name, avatar_URL: avatarUrl },
    date,
    title,
    content,
    featured_image: imgSrc
  } = props.postDetail;

  if (!imgSrc) {
    imgSrc = IMAGE_NOT_FOUND_URL;
  }

  return (
    <PostDetailContainerWrapper>
      <PostDetailImage src={imgSrc} alt="featured"></PostDetailImage>
      <PostDescriptionSection>
        <PostDetailTitle className="title">{title}</PostDetailTitle>
        <AuthorDetailsSection>
          <img className="avatar" src={avatarUrl} alt="avatar" />
          <div className="name-date">
            <span className="name">{name}</span>
            <span className="date">{formatDate(date)}</span>
          </div>
        </AuthorDetailsSection>
        <PostDetailContent
          dangerouslySetInnerHTML={{ __html: content }}
        ></PostDetailContent>
      </PostDescriptionSection>
    </PostDetailContainerWrapper>
  );
};

export default PostDetailComponent;
