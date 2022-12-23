import './styles.scss';

// Write TypeScript code!
const appDiv = <HTMLElement>document.getElementById('app');

class BaseComponent {
  private element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.element = document.createElement(tag);
  }

  render(parent: HTMLElement | BaseComponent) {
    if (parent instanceof HTMLElement) {
      parent.append(this.element);
    } else {
      parent.element.append(this.element);
    }
    return this;
  }

  remove() {
    this.element.remove();
    return this;
  }

  setClass(classes: string | string[]) {
    const args = Array.isArray(classes) ? classes : [classes];
    this.element.classList.add(...args);
    return this;
  }

  setAttribute(attr: string, value?: string) {
    if (value) {
      this.element.setAttribute(attr, value);
    } else {
      this.element.setAttribute(attr, '');
    }
    return this;
  }

  setContent(content: string) {
    this.element.textContent = content;
    return this;
  }

  setHandler(event: keyof HTMLElementEventMap, callback: (e: Event) => void) {
    this.element.addEventListener(event, callback);
    return this;
  }
}

class Page extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    new BaseComponent('h1').setContent(title).render(this);
    new BaseComponent('p').setContent(content).render(this);
  }
}

class Link extends BaseComponent {
  constructor(title: string) {
    super('a');
    this.setAttribute('href', '#' + title.toLowerCase()).setContent(title);
  }
}

const routes: Record<string, Page> = {
  main: new Page('Main', 'Main content'),
  about: new Page('About', 'About page content'),
};

const notFoundPage = new Page('404', 'Not found');

export default class App {
  activePage?: Page;

  constructor(private container: HTMLElement) {
    const header = new BaseComponent('header');
    Object.keys(routes).forEach((route) => {
      new Link(route).render(header);
    });
    header.render(this.container);
    this.handleRouteChange();
    window.onpopstate = () => this.handleRouteChange();
  }

  handleRouteChange(): void {
    const hash = window.location.hash.slice(1).toLowerCase();
    const targetPage = hash ? routes[hash] || notFoundPage : routes.main;

    if (targetPage === this.activePage) return;
    if (this.activePage) this.activePage.remove();
    this.activePage = targetPage;
    this.activePage.render(this.container);
  }
}

const app = new App(appDiv);
console.log(app);
