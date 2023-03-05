import BaseComponent from '../../core/templates/component';
declare class ProductPage extends BaseComponent {
    private api;
    private cart;
    private id;
    private product?;
    constructor();
    renderProductContent(e: HTMLElement): Promise<void>;
    action(e: Event): void;
    setBreadcrumbs(): void;
}
export default ProductPage;
