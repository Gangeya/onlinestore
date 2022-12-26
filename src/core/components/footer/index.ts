class Footer {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.innerHTML = '<h1>Footer</h1>';
  }

  render() {
    return this.container;
  }
}

export default Footer;
