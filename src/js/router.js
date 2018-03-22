import NotFound from './pages/NotFound';

export default class Router {
  constructor(routes) {
    const { pathname } = window.location;
    const PageCurrent = routes[pathname] ? routes[pathname] : NotFound;

    new PageCurrent().render();
  }
}
