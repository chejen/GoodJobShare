import App from './containers/Layout';
import LandingPage from './containers/LandingPage';
import LaborRightsMenu from './containers/LaborRightsMenu';
import LaborRights from './containers/LaborRights';
import ExperienceSearchPage from './containers/ExperienceSearchPage';
import ExperienceDetailPage from './containers/ExperienceDetailPage';
import AnotherPage from './containers/AnotherPage';
import NotFoundPage from './containers/NotFoundPage';

const routes = () => ({
  path: '/',
  component: App,
  indexRoute: {
    component: LandingPage,
  },
  childRoutes: [{
    path: 'labor-rights',
    component: LaborRightsMenu,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/LaborRightsMenu').default);
      }, 'labor-rights-menu');
    },
    */
  }, {
    path: 'labor-rights/:id',
    component: LaborRights,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/LaborRights').default);
      }, 'labor-rights');
    },
    */
  }, {
    path: 'experiences/search',
    component: ExperienceSearchPage,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/ExperienceSearchPage').default);
      }, 'search');
    },
    */
  }, {
    path: 'experiences/:id',
    component: ExperienceDetailPage,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/ExperienceDetailPage').default);
      }, 'detail');
    },
    */
  }, {
    path: 'another',
    component: AnotherPage,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/AnotherPage').default);
      }, 'another');
    },
    */
  }, {
    path: '*',
    component: NotFoundPage,
    /*
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./containers/NotFoundPage').default);
      }, 'notFound');
    },
    */
  }],
});

export default routes;
