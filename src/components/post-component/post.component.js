import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination-component/pagination.component";
import { timeDifference } from "../../utils";
import { DEFAULT_PAGE_SIZE, IMAGE_NOT_FOUND_URL } from "../../constants";
import {
  PostsComponentWrapper,
  PostCardWrapper,
  PostCardImg,
  PostCardTitle,
  PostCardDate,
  CategoriesSection,
  Category,
  Bullet,
  CategoryLabel,
  PaginationWrapper
} from "./style";
import PropTypes from "prop-types";
import SkeletonLoader from "../skeleton-loader/skeletonloader";

const PostComponent = props => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    props.initPostDetailAction();
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
      <PostCardWrapper
        key={post_thumbnail.ID}
        onClick={() => postCardHandler(slug)}
      >
        {getCategoriesPills(postItem.categories)}
        <PostCardImg
          src={post_thumbnail.URL}
          alt="post thumbnail"
        ></PostCardImg>
        <PostCardTitle
          dangerouslySetInnerHTML={{ __html: title }}
        ></PostCardTitle>
        <PostCardDate>{formatDate(date)}</PostCardDate>
      </PostCardWrapper>
    );
  };

  return props.loading ? (
    <SkeletonLoader whichPage="posts" />
  ) : (
    props.postsList && (
      <PostsComponentWrapper>
        {props.postsList.map((postItem, index) => {
          return <PostCard {...postItem} key={index} />;
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
  );
};

PostComponent.propTypes = {
  loading: PropTypes.bool,
  postsList: PropTypes.array,
  totalPostsCount: PropTypes.number,
  categoriesColor: PropTypes.object,
  paginationConfig: PropTypes.object
};

export default PostComponent;
