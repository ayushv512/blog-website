import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination-component/pagination.component";
import { timeDifference } from "../../utils";
import { DEFAULT_PAGE_SIZE, IMAGE_NOT_FOUND_URL } from "../../constants";
import {
  PostsComponentWrapper,
  CategoriesSection,
  Category,
  Bullet,
  CategoryLabel,
  PaginationWrapper
} from "./style";

const PostComponent = props => {
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(props.categoriesColor).length) {
      props.postsGetAction();
    }
  }, [props.categoriesColor]);

  const updatePageNumber = (page) => {
    props.setPaginationConfigAction({
      pageNumber: page,
      pageSize: DEFAULT_PAGE_SIZE
    })
    props.postsGetAction();
  }

  const formatDate = date => timeDifference(new Date(date));

  const postCardHandler = (slug) => {
    history.push("/blogs/" + slug);
  }

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
    let { post_thumbnail, title, date, slug } = postItem;
    if (!post_thumbnail) {
      post_thumbnail = {
        ID: Math.random() * 10,
        URL: IMAGE_NOT_FOUND_URL
      }
    }

    return (
      <div key={post_thumbnail.ID} className="post-card" onClick={() => postCardHandler(slug)}>
        {getCategoriesPills(postItem.categories)}
        <img src={post_thumbnail.URL} width="350" height="200" />
        <div className="post-title"> {title} </div>
        <div className="post-date"> {formatDate(date)} </div>
      </div>
    );
  };

  return (
    props.postsList
      ? (
        <PostsComponentWrapper>
          {props.postsList.map(postItem => {
            return <PostCard key={postItem.post_thumbnail?.ID} {...postItem} />;
          })}
          <PaginationWrapper>
            <Pagination
              currentPage={props.paginationConfig.pageNumber}
              totalCount={props.totalPostsCount}
              pageSize={props.paginationConfig.pageSize}
              onPageChange={page => updatePageNumber(page)}
            />
          </PaginationWrapper>
        </PostsComponentWrapper>
      )
      : null
  );
};

export default PostComponent;
