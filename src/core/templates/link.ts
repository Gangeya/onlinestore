import BaseComponent from '../templates/component';

class Link extends BaseComponent {
  constructor(title: string) {
    super('a');
    this.setAttribute('href', '#' + title.toLowerCase()).setContent(title);
  }
}

export default Link;
