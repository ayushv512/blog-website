// Site ID for Truecaller blog
export const siteID = "107403796";

// Theme colors for the website
export const themeColors = {
  white: "#FFFFFF",
  backgroundBody: "#f4f7f9",
  footer: "#001049",
  title: "#212121",
  date: "#a8adaa",
  pagination: "#0589ff",
  border: "#f5f5f5"
};

// messages for the pages
export const messages = {
  TRUECALLER_BLOG: "The Truecaller Blog",
  LATEST_ARTICLES: "Latest articles",
  PAGE_NOT_FOUND: "Page Not Found",
  PAGE_NOT_FOUND_SUBTEXT:
    "It looks like nothing was found at this location. Please check if you might have mistyped.",
  GOTO_HOMEPAGE: "or Go to Homepage"
};

// Base URL
export const base_URL =
  "https://public-api.wordpress.com/rest/v1.1/sites/" + siteID + "/";

// GET Posts query params
export const ORDER_BY = "date";
export const ORDER = "DESC";
