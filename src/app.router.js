import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoadingComponent from './components/loading-component/loading-component';

const PostsPage = lazy(() => import('./pages/posts-page/posts.page'));
const PostDetailPage = lazy(() => import('./pages/postdetail-page/postdetail.page'));

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<LoadingComponent />}>
      <section>
        <Switch>
          <Route exact path="/blogs" component={PostsPage} />
          <Route exact path="/blogs/:slug" component={PostDetailPage} />
          <Redirect to="/blogs" />
        </Switch>
      </section>
    </Suspense>
  </Router>
);

export default AppRouter;
