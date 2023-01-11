class BaseComponent {
  protected element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.element = document.createElement(tag);
  }

  render(parent: HTMLElement | BaseComponent) {
    if (parent instanceof HTMLElement) {
      parent.append(this.element);
    } else {
      parent.element.append(this.element);
    }
    return this.element;
  }

  renderAfter(parent: HTMLElement | BaseComponent) {
    if (parent instanceof HTMLElement) {
      parent.after(this.element);
    } else {
      parent.element.after(this.element);
    }
    return this.element;
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

  setHTML(htmlcode: string) {
    this.element.innerHTML = htmlcode;
    return this;
  }

  setHandler(event: keyof HTMLElementEventMap, callback: (e: Event) => void) {
    this.element.addEventListener(event, callback);
    return this;
  }
}

export default BaseComponent;
