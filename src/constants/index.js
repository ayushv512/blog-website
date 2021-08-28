const siteID = "107403796"

export const base_URL = "https://public-api.wordpress.com/rest/v1.1/sites/" + siteID + "/";

export const URL = {
    getPostsLink: (category, paginationConfig) => {
        return category === 'all-categories'
            ? `${base_URL}posts/?fields=slug,categories,post_thumbnail,title,date&number=${paginationConfig.pageSize}&page=${paginationConfig.pageNumber}`
            : `${base_URL}posts/?category=${category}&fields=slug,categories,post_thumbnail,title,date&number=${paginationConfig.pageSize}&page=${paginationConfig.pageNumber}`
    },
    getPostDetailLink: (slug) => {
        return `${base_URL}posts/slug:${slug}?fields=featured_image,title,author,content,date`
    }
}

export const IMAGE_NOT_FOUND_URL = 'https://www.metisgl.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
// Category Default
export const DEFAULT_CATEGORY = "all-categories";

// Pagination Defaults
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_NUMBER = 1;