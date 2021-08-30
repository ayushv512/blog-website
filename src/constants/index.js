import { base_URL } from "../config";

// Device widths
export const deviceWidths = {
  phoneWidth: "480px",
  tabletWidth: "768px",
  tabletLandscapeWidth: "1024px",
  smallDesktop: "1360px"
};

// URLs for HTTP calls
export const URL = {
  getCategories: () => {
    return `${base_URL}categories`;
  },
  getPostsLink: (category, paginationConfig, orderBy, order) => {
    const { pageSize, pageNumber } = paginationConfig;
    return category === "all-categories"
      ? `${base_URL}posts/?fields=slug,categories,post_thumbnail,title,date&number=${pageSize}&page=${pageNumber}&order_by=${orderBy}&order=${order}`
      : `${base_URL}posts/?category=${category}&fields=slug,categories,post_thumbnail,title,date&number=${pageSize}&page=${pageNumber}&order_by=date&order=DESC`;
  },
  getPostDetailLink: slug => {
    return `${base_URL}posts/slug:${slug}?fields=featured_image,title,author,content,date`;
  }
};

// Dummy image URL
export const IMAGE_NOT_FOUND_URL =
  "https://www.metisgl.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

// Category Default
export const DEFAULT_CATEGORY = "all-categories";

// Pagination Defaults
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_NUMBER = 1;
