import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoadingComponent from './components/loading-component/loading-component';

const PostsPage = lazy(() => import('./pages/posts-page/posts.page'));
const PostDetailPage = lazy(() => import('./pages/postdetail-page/postdetail.page'));
const PageNotFound = lazy(() => import('./pages/blog-not-found-page/blog-not-found.page'));

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<LoadingComponent />}>
      <section>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/blogs" />} />
          <Route exact path="/blogs" component={PostsPage} />
          <Route exact path="/blogs/:slug" component={PostDetailPage} />
          <Route exact path="/page-not-found" component={PageNotFound} />
          <Redirect to="/page-not-found" />
        </Switch>
      </section>
    </Suspense>
  </Router>
);

export default AppRouter;
