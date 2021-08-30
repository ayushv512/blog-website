import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  PostDetailContainerWrapper,
  PostDescriptionSection,
  AuthorDetailsSection,
  PostDetailContent,
  PostDetailImage,
  PostDetailTitle,
  AuthorDetailsImg,
  AuthorNameDateContainer,
  AuthorName,
  AuthorDate
} from "./style";

import { IMAGE_NOT_FOUND_URL } from "../../constants/index";
import { formatDate } from "../../utils";
import PropTypes from "prop-types";
import SkeletonLoader from "../skeleton-loader/skeletonloader";

const PostDetailComponent = props => {
  const history = useHistory();
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    props.postDetailGetAction(slug);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.postDetail === "error") {
      // route to page not found
      history.push("/page-not-found");
    }
  }, [props.postDetail]); // eslint-disable-line react-hooks/exhaustive-deps

  return props.loading ? (
    //<LoadingComponent />
    <SkeletonLoader whichPage="post-details" />
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
        <PostDetailTitle
          dangerouslySetInnerHTML={{ __html: title }}
        ></PostDetailTitle>
        <AuthorDetailsSection>
          <AuthorDetailsImg src={avatarUrl} alt="avatar"></AuthorDetailsImg>
          <AuthorNameDateContainer>
            <AuthorName>{name}</AuthorName>
            <AuthorDate>{formatDate(date)}</AuthorDate>
          </AuthorNameDateContainer>
        </AuthorDetailsSection>
        <PostDetailContent
          dangerouslySetInnerHTML={{ __html: content }}
        ></PostDetailContent>
      </PostDescriptionSection>
    </PostDetailContainerWrapper>
  );
};

PostDetailComponent.propTypes = {
  loading: PropTypes.bool,
  postDetail: PropTypes.object
};

export default PostDetailComponent;
