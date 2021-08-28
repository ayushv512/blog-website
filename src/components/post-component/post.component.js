import React, { useEffect } from "react";
import {
  PostComponentWrapper,
  CategoriesSection,
  Category,
  Bullet,
  CategoryLabel
} from "./style";
import { timeDifference } from "../../utils";
import { useHistory } from "react-router-dom";

const PostComponent = props => {
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(props.categoriesColor).length) {
      props.postGetAction();
    }
  }, [props.categoriesColor]);

  const getCategoriesPills = categories => {
    return (
      <CategoriesSection>
        {Object.keys(categories).map(category => {
          return (
            <Category key={category.ID}>
              <Bullet backgroundColor={props.categoriesColor[categories[category].slug].color}></Bullet>
              <CategoryLabel>{category}</CategoryLabel>
            </Category>
          )
        })}
      </CategoriesSection>
    )
  };

  const PostCard = postItem => {
    const { post_thumbnail, title, date, slug } = postItem;
    return (
      <div key={post_thumbnail.ID} className="post-card" onClick={() => postCardHandler(slug)}>
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

  return (
    props.postsList
      ? (<PostComponentWrapper>
        {props.postsList.map(postItem => {
          return <PostCard key={postItem.post_thumbnail?.ID} {...postItem} />;
        })}
      </PostComponentWrapper>)
      : null
  );
};

export default PostComponent;
