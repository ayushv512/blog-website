# The Truecaller Blog 

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
2. Open a command window and change working directory to repo.
3. Run npm install to install the dependencies.
```sh
$ npm install
```
4. Run local dev server (with live reload).
```sh
$ npm run start
```

## Folder Structure Overview
1. **src** - App Source files.
    1. **index.js**: The entry point file for the application. It renders the main <App> component.
    2. **App.js**: The main application component.
    3. **index.css**: Styles for the complete application.
    4. **app.router.js**: Routing for the whole application.
    5. **actions**: All Redux actions. Events to trigger application changes.
    6. **assets**: All images and logo.
    7. **components**: All functional components with their containers.
    8. **constants**: Static data that doesn’t change.
    9. **config**: API endpoints and theme, info that might change in different environments.
    10. **pages**: Specific pages and corresponds to specific route.
    11. **reducers**: All Redux reducers. Adds/removes/edits data from the global store.
    12. **utils**: Utility/helper functions.


## Application flow
1. The user lands on the Landing page i.e Posts List page by default. The first API which gets called is **Categories API** with default ```all-categories``` parameters to fetch list of categories.
2. If the catergory list is available then **Posts List API** call is called with default query parameters of ```page number```, ```page size```, ```order by``` (date) & ```order``` (DESC). 
3. In the posts list page, the user can filter the posts with the category filter. For filtering **Posts List API** is called again with ```category``` query parameters.
4. The user can also navigate the posts list with the help of pagination. For pagination **Posts List API** is called again with respective ```page number``` parameter.
5. Posts are clickable and on click of each post it redirects to their respective post details page. In the post detail page, **Post Details API** gets called by taking ```slug``` from the URL params. 
6. If in case the user routes to a garbage route, the application redirects to **404 NOT FOUND** page. 

## Solution Approach
1. The website is using **Redux** to handle the application state. In the Redux the following state are maintained:
    1. **categoriesList** - List of categories and loading state. 
    2. **postsList** - List of posts and loading state.
    3. **selectedCategory** - Selected Category from category dropdown. Default value - ```all-categories```.
    4. **categoriesColorList** - Categories mapped with their respective colors. 
    5. **paginationConfig** - Page number and Page size to maintain state of pagination. Default value - pageNumber: ```1``` & pageSize: ```20```.
    6. **postDetail** - Single post detail and loading state.
2. **Router** is implemented to navigate with Post and Post Details pages. Default route is post page route -  ```/blogs``` and Post detail page route is - ```/blogs/{slug}```.
3. **Pagination** is implemented with left and right arrows to navigate the list of posts.
4. **Skeleton loader** is shown till the time data loads for both the pages. 
5. The application is **Responsive** which is developed using Media Queries (Breakpoints - 1360px, 1024px, 768px, 480px) and CSS Flexbox. 
 
## Assumptions
1. Refreshing the posts list page will reset the filters to default value i.e ```all-categories```.
2. If the thumbnail image is not coming from the API, IMAGE_NOT_FOUND dummy image is shown on both pages. 
3. For Posts List API, orderBy, order, pageSize paramters are hard-coded.

##Tested on 
1. Browsers - Chrome, Safari and Firefox
2. Devices - iPhone 6/7/8 Plus, iPhone 6/7/8, iPad, Pixel and OnePlus 

##Screenshots