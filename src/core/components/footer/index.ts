class Footer {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.innerHTML = '<p class="footer-text">Online Store 2023</p>';
  }

  render() {
    return this.container;
  }
}

export default Footer;
