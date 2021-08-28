const siteID = "107403796"

export const base_URL = "https://public-api.wordpress.com/rest/v1.1/sites/" + siteID + "/";

export const URL = {
    getPostsLink: (category) => {
        return category === 'all-categories'
            ? `${base_URL}posts/?fields=slug,categories,post_thumbnail,title,date&number=20&page=1`
            : `${base_URL}posts/?category=${category}&fields=slug,categories,post_thumbnail,title,date&number=20&page=1`
    }
}