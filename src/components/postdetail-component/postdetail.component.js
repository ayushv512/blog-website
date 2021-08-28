import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PostDetailContainerWrapper, PostDescriptionSection, AuthorDetailsSection, PostDetailContent} from "./style";

import LoadingComponent from "../loading-component/loading-component";
import { IMAGE_NOT_FOUND_URL } from "../../constants/index";

const PostDetailComponent = props => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    const slug = history.location.pathname.split("/")[2];
    props.postDetailGetAction(slug);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return props.loading ? (
    props.postDetail && <PostDetailContainer {...props} />
  ) : (
    <LoadingComponent />
  );
};

const PostDetailContainer = props => {
  let {
    author: { name, avatar_URL: avatarUrl },
    date,
    title,
    content,
    featured_image: imgSrc
  } = props.postDetail;

  if (!imgSrc) {
    imgSrc =  IMAGE_NOT_FOUND_URL;
  }

  const formatDate = date => {
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    const monthNames = ["Jan", "Feb", "March", "April", "May","June","July", "Aug", "Sept", "Oct", "Nov","Dec"];
    const ordinal = (date) => (date > 20 || date < 10) ? ([false, "st", "nd", "rd"])[(date%10)] || "th" : "th";
    const month = monthNames[new Date(date).getMonth()]
    const formattedDate = month + ' '+ day +  ordinal(new Date(date).getDate()) + ',' + year;
    return formattedDate;
  };

  return (
    <PostDetailContainerWrapper>
      <img src={imgSrc} height="500" className="featured-image" alt="featured"/>
      <PostDescriptionSection>
        <div className="title">{title}</div>
        <AuthorDetailsSection>
          <img className="avatar" src={avatarUrl} alt="avatar"/>
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
