declare class BaseComponent {
    protected element: HTMLElement;
    constructor(tag: keyof HTMLElementTagNameMap);
    render(parent: HTMLElement | BaseComponent): HTMLElement;
    renderAfter(parent: HTMLElement | BaseComponent): HTMLElement;
    remove(): this;
    setClass(classes: string | string[]): this;
    setAttribute(attr: string, value?: string): this;
    setContent(content: string): this;
    setHandler(event: keyof HTMLElementEventMap, callback: (e: Event) => void): this;
}
export default BaseComponent;
