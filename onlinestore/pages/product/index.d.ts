import BaseComponent from '../../core/templates/component';
declare class ProductPage extends BaseComponent {
    constructor(title: string, content: string);
    renderProductContent(e: HTMLElement): void;
}
export default ProductPage;
