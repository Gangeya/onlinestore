import './styles.scss';
import './pages/main/mainPage.scss';
import './core/components/footer/footer.scss';
import BaseComponent from './core/templates/component';
import Header from './core/components/header';
import Footer from './core/components/footer';
import MainPage from './pages/main/';
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import Page from './core/templates/page';
import Link from './core/templates/link';
import Cart from './core/cart/cart';
enum Routes {
  main = 'main',
  product = 'product',
  cart = 'cart',
  '' = 'main',
}
const notFoundPage = new Page('404', 'Not found');

export default class App {
  private cart = new Cart();

  private container: HTMLElement = <HTMLElement>document.getElementById('app');

  activePage?: string;

  header: Header;

  constructor() {
    this.header = new Header();
  }

  handleRouteChange() {
    document.querySelector('main')?.remove();
    const hash = window.location.hash.slice(1).toLowerCase();
    let targetPage = '';
    if (hash.includes('product/')) {
      targetPage = Routes.product;
      return new ProductPage().renderAfter(this.header);
    } else if (hash === 'main' || hash === '') {
      targetPage = Routes[hash] || notFoundPage;
      return new MainPage().renderAfter(this.header);
    } else if (hash === 'cart') {
      targetPage = Routes[hash] || notFoundPage;
      return new CartPage().renderAfter(this.header);
    } else targetPage = Routes.main;
    if (targetPage === this.activePage) {
      return;
    }
  }

  start() {
    const nav = new BaseComponent('nav').setClass('d-none');
    const footer = new Footer('footer', 'footer');
    const popupbg = new BaseComponent('div')
      .setClass('pop-up-bg')
      .setHandler('click', () => {
        this.popbg();
      });

    Object.keys(Routes).forEach((route) => {
      new Link(route).render(nav);
    });

    nav.render(this.header);
    this.header.render(this.container);

    this.handleRouteChange();
    window.onpopstate = () => this.handleRouteChange();
    this.container.insertAdjacentElement('beforeend', footer.render());
    popupbg.render(this.container);
  }

  popbg() {
    (<HTMLElement>document.querySelector('.pop-up-bg')).style.display = 'none';
    (<HTMLElement>document.querySelector('.modal')).style.display = 'none';
  }
}

export const app = new App();
app.start();
