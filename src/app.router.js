import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
// import LoadingComponent from './components/loading/loading-component';
//import { routesNav } from './config/config';

const PostsPage = lazy(() => import('./pages/posts-page/posts.page'));
const PostDetailPage = lazy(() => import('./pages/postdetail-page/postdetail.page'));

const history = createHistory();

//const routeLabels = routesNav.map((item) => item.to);

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={ <div> Loading... </div> }>
      <>
        <section>
            <Switch>
              <Route exact path="/home" component={PostsPage} />
              <Route exact path="/post/:slug" component={PostDetailPage} />
              <Redirect to="/home" />
            </Switch>
        </section>
      </>
    </Suspense>
  </Router>
);

export default AppRouter;
