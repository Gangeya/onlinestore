import BaseComponent from '../../core/templates/component';

class MainPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    new BaseComponent('h1').setContent(title).render(this);
    new BaseComponent('p').setContent(content).render(this);
    new BaseComponent('aside').setContent('This is Aside').render(this);
    new BaseComponent('article').setContent('This is Article').render(this);
  }
}

export default MainPage;
