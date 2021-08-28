import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../components/loading-component/loading-component";
import Pagination from "../pagination-component/pagination.component";
import { timeDifference } from "../../utils";
import { DEFAULT_PAGE_SIZE, IMAGE_NOT_FOUND_URL } from "../../constants";
import {
  PostsComponentWrapper,
  PostsCardWrapper,
  PostsCardTitle,
  PostsCardDate,
  CategoriesSection,
  Category,
  Bullet,
  CategoryLabel,
  PaginationWrapper
} from "./style";

const PostComponent = props => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (Object.keys(props.categoriesColor).length) {
      props.postsGetAction();
    }
  }, [props.categoriesColor]); // eslint-disable-line react-hooks/exhaustive-deps

  const updatePageNumber = page => {
    props.setPaginationConfigAction({
      pageNumber: page,
      pageSize: DEFAULT_PAGE_SIZE
    });
    props.postsGetAction();
  };

  const formatDate = date => timeDifference(new Date(date));

  const postCardHandler = slug => {
    history.push("/blogs/" + slug);
  };

  const getCategoriesPills = categories => {
    return (
      <CategoriesSection>
        {Object.keys(categories).map((category, index) => {
          return (
            <Category key={index}>
              <Bullet
                backgroundColor={
                  props.categoriesColor[categories[category].slug].color
                }
              ></Bullet>
              <CategoryLabel>{category}</CategoryLabel>
            </Category>
          );
        })}
      </CategoriesSection>
    );
  };

  const PostCard = postItem => {
    let { post_thumbnail, title, date, slug } = postItem;
    if (!post_thumbnail) {
      post_thumbnail = {
        ID: Math.random() * 10,
        URL: IMAGE_NOT_FOUND_URL
      };
    }

    return (
      <PostsCardWrapper
        key={post_thumbnail.ID}
        onClick={() => postCardHandler(slug)}
      >
        {getCategoriesPills(postItem.categories)}
        <img src={post_thumbnail.URL} width="340" height="200" alt="post thumbnail"/>
        <PostsCardTitle> {title} </PostsCardTitle>
        <PostsCardDate>
          {formatDate(date)}
        </PostsCardDate>
      </PostsCardWrapper>
    );
  };

  return props.loading ? (
    props.postsList && (
      <PostsComponentWrapper>
        {props.postsList.map((postItem, index) => {
          return <PostCard {...postItem} key={index}/>;
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
  ) : (
    <LoadingComponent />
  );
};

export default PostComponent;
