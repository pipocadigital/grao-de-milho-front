import Router from './router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

document.addEventListener('DOMContentLoaded', () => new Router({
  '/': HomePage,
  '/about': AboutPage,
}), false);
