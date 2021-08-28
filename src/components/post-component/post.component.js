import React, { useState, useEffect } from "react";
import { PostComponentWrapper } from "./style";
import { timeDifference } from "../../core/utils.time-difference";
import { useHistory } from "react-router-dom";

const PostComponent = props => {
  const history = useHistory();

  const PostCard = postItem => {
    const { post_thumbnail, title, date, slug } = postItem;
    return (
      <div className="post-card" onClick={() => postCardHandler(slug)}>
        {/* <div> {postItem.categories} </div> */}
        <img src={post_thumbnail.URL} width="350" height="200" />
        <div className="post-title"> {title} </div>
        <div className="post-date"> {formatDate(date)} </div>
      </div>
    );
  };

  const postCardHandler = (slug) => {
    history.push("/post/" + slug );
  }

  const formatDate = date => timeDifference(new Date(date));

  return (
    <PostComponentWrapper>
      {props.postsList.map(postItem => {
        return <PostCard {...postItem} />;
      })}
    </PostComponentWrapper>
  );
};

export default PostComponent;
