import React, { useState, useEffect } from "react";
import { PostComponentWrapper } from "./style";
import { timeDifference } from "../../utils";

const PostComponent = props => {

  useEffect(() => {
    props.postGetAction();
  }, []);

  const getCategoriesPills = categories => {
    // return JSON.stringify(categories);
    return 'abc';
  };

  const PostCard = postItem => {
    const { post_thumbnail, title, date } = postItem;
    return (
      <div className="post-card">
        {getCategoriesPills(postItem.categories)}
        <img src={post_thumbnail.URL} width="350" height="200" />
        <div className="post-title"> {title} </div>
        <div className="post-date"> {formatDate(date)} </div>
      </div>
    );
  };

  const formatDate = date => timeDifference(new Date(date));

  return (
    props.postsList
      ? (<PostComponentWrapper>
        {props.postsList.map(postItem => {
          return <PostCard {...postItem} />;
        })}
      </PostComponentWrapper>)
      : null
  );
};

export default PostComponent;
