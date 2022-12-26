import './styles.scss';
import './pages/main/mainPage.scss';
import './core/components/footer/footer.scss';
import BaseComponent from './core/templates/component';
import Header from './core/components/header';
import Footer from './core/components/footer';
import MainPage from './pages/main/';
import AboutPage from './pages/about';
import Page from './core/templates/page';
import Link from './core/templates/link';

const routes: Record<string, Page> = {
  main: new MainPage('Main page', 'Main content'),
  about: new AboutPage('About', 'About page content'),
};

const notFoundPage = new Page('404', 'Not found');

export default class App {
  private container: HTMLElement = <HTMLElement>document.getElementById('app');

  activePage?: Page;

  header: Header;

  constructor() {
    this.header = new Header();
  }

  handleRouteChange(): void {
    const hash = window.location.hash.slice(1).toLowerCase();
    const targetPage = hash ? routes[hash] || notFoundPage : routes.main;
    console.log(targetPage, this.activePage);

    if (targetPage === this.activePage) return;
    if (this.activePage) this.activePage.remove();
    this.activePage = targetPage;
    this.activePage.renderAfter(this.header);
  }

  start() {
    const nav = new BaseComponent('nav').setClass('nav');
    const footer = new Footer('footer', 'footer');

    Object.keys(routes).forEach((route) => {
      new Link(route).render(nav);
    });
    nav.render(this.header);
    this.header.render(this.container);

    this.handleRouteChange();
    window.onpopstate = () => this.handleRouteChange();
    this.container.insertAdjacentElement('beforeend', footer.render());
  }
}

const app = new App();
app.start();
console.log(app);
