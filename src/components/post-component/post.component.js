import React, { useState, useEffect } from "react";
import { PostComponentWrapper } from "./style";
import { timeDifference } from "../../utils";
import { useHistory } from "react-router-dom";

const PostComponent = props => {
  const history = useHistory();

  useEffect(() => {
    props.postGetAction();
  }, []);

  const getCategoriesPills = categories => {
    // return JSON.stringify(categories);
    return "abc";
  };

  const PostCard = postItem => {
    const { post_thumbnail, title, date, slug } = postItem;
    return (
      <div className="post-card" onClick={() => postCardHandler(slug)}>
        {getCategoriesPills(postItem.categories)}
        <img src={post_thumbnail.URL} width="350" height="200" />
        <div className="post-title"> {title} </div>
        <div className="post-date"> {formatDate(date)} </div>
      </div>
    );
  };

  const postCardHandler = slug => {
    history.push(`/blogs/${slug}`);
  };

  const formatDate = date => timeDifference(new Date(date));

  return props.postsList ? (
    <PostComponentWrapper>
      {props.postsList.map(postItem => {
        return <PostCard {...postItem} />;
      })}
    </PostComponentWrapper>
  ) : null;
};

export default PostComponent;
