# The Truecaller Blog 

The Truecaller Blog is a website where the blogs' content of Truecaller which are taken from the WordPress content management system. These blogs display a lot of content across various categories and provide a user the ability to surf through the blogs covering various categories.

## Development stack
1. React (using React Hooks) - 17.0.2 
2. Redux (for managing state) - 4.1.1
3. Redux Thunk Middleware (for managing state asynchronously) - 2.3.0
3. React Router (for handling routes in the website) - 5.2.1
4. Axios (for handling HTTP calls) - 0.21.1
5. Styled components (for styling components) - 5.3.1
6. PropTypes (for checking data types) - 15.7.2

## Steps to run the application
1. Install Node version 12.x.x - https://nodejs.org/en/ 
2. Open a command window and change the working directory to the codebase repository.
3. Run npm install to install all the dependencies.
```sh
$ npm install
```
4. Run local dev server (with live reload).
```sh
$ npm start
```

## Folder Structure Overview
1. **src** - App Source files.
    1. **index.js**: The entry point file for the application. It renders the main component.
    2. **App.js**: The main application component.
    3. **index.css**: Global styles for the application.
    4. **app.router.js**: Routing for the whole application.
    5. **actions**: All Redux actions and events to trigger application store changes.
    6. **assets**: All images and logo.
    7. **components**: All functional components with their containers.
    8. **constants**: Static data that don’t change.
    9. **config**: HTTP API endpoints and theme, info that might change in different environments.
    10. **pages**: Specific pages and corresponding to a specific route.
    11. **reducers**: All Redux reducers. Adds/Removes/Updates data from the application store.
    12. **utils**: Utilities and helpers methods.


## Application flow
1. The user lands on the Landing page i.e. Posts List page by default. The first HTTP API which gets called is **Categories HTTP API** to fetch the list of categories.
2. If the category list is available then **Posts List HTTP API** call is called for all the available categories with default query parameters of ```page number```, ```page size```, ```order by``` (date) & ```order``` (DESC). 
3. In the posts list page, the user can filter the posts with the category filter. For filtering, **Posts List HTTP API** is called again with ```category``` query parameters.
4. The user can also navigate the posts list with the help of pagination. For pagination **Posts List HTTP API** is called again with respective ```page number``` parameter.
5. Posts are clickable and on click of each post, it redirects to the respective post details page. In the post detail page, **Post Details HTTP API** gets called by taking ```slug``` from the URL path parameters. 
6. If in case the user routes to a garbage route, the application redirects to the **404 NOT FOUND** page. 

## Solution Approach
1. The website is using **Redux** to handle the application state. In Redux, the following states are maintained:
    1. **categoriesList** - List of categories and loading state.
    2. **postsList** - List of posts and loading state.
    3. **selectedCategory** - Selected Category from category dropdown. Default value - ```all-categories```.
    4. **categoriesColorList** - Categories mapped with their respective colors. 
    5. **paginationConfig** - Page number and Page size to maintain state of pagination. Default value - pageNumber: ```1``` & pageSize: ```20```.
    6. **postDetail** - Single post detail and loading state.
2. **Router** is implemented to navigate with Post and Post Details pages. The default route is the post page route -  ```/blogs``` and Post detail page route is - ```/blogs/{slug}``` where ```slug``` is derived from the blog's data.
3. **Pagination** is implemented with left and right arrows to navigate the list of posts.
4. **Skeleton loader** is shown until the data loads for both pages.
5. The application is **Web Responsive** which is developed using Media Queries (Breakpoints - 1360px, 1024px, 768px, 480px) and CSS Flexbox.
 
## Assumptions
1. Refreshing the posts list page will reset the filters to default value i.e. ```all-categories```.
2. If the thumbnail image is not coming from the HTTP API, the IMAGE_NOT_FOUND dummy image is shown on both pages. 
3. For Posts List HTTP API, orderBy, order, and pageSize parameters are pre-defined and can not be changed.
4. Header Logo click navigates to root URL i.e. posts list page.
5. Post Detail content is safe and XSS invulnerable.

## Tested on 
1. Browsers - Chrome, Safari, and Firefox
2. Devices - iPhone 6/7/8 Plus, iPhone 6/7/8, iPad, Pixel and OnePlus 

## Screenshots
![Desktop-Post Page](https://user-images.githubusercontent.com/32220773/131502587-17b51bb3-b893-4d8d-bfb0-1f6e9062e1f3.png)
![Desktop-Post Details page](https://user-images.githubusercontent.com/32220773/131502500-cf95d3ea-806e-440f-85ac-fb3839a0b322.png)
<img width="415" alt="Mobile-Post page -1" src="https://user-images.githubusercontent.com/32220773/131502870-5f1bd7dd-2b0d-40a6-ae8b-10afec8c70d5.png">
<img width="413" alt="Mobile-Post page -2" src="https://user-images.githubusercontent.com/32220773/131502882-77e51cbb-d112-46cc-84c5-cf207c65de9e.png">
<img width="418" alt="Mobile -Post detail" src="https://user-images.githubusercontent.com/32220773/131502988-3a38dce3-26d9-4184-bfed-9e6dc042abaf.png">
