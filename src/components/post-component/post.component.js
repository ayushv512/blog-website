import React, { useState, useEffect } from "react";
import { PostComponentWrapper } from "./style";
import { timeDifference } from "../../core/utils.time-difference";

const PostComponent = props => {
  const PostCard = postItem => {
    const { post_thumbnail, title, date } = postItem;
    return (
      <div className="post-card">
        {/* <div> {postItem.categories} </div> */}
        <img src={post_thumbnail.URL} width="350" height="200" />
        <div className="post-title"> {title} </div>
        <div className="post-date"> {formatDate(date)} </div>
      </div>
    );
  };

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
