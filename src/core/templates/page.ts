import BaseComponent from '../templates/component';

class Page extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    new BaseComponent('h1').setContent(title).render(this);
    new BaseComponent('p').setContent(content).render(this);
  }
}

export default Page;
