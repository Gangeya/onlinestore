import BaseComponent from '../../core/templates/component';
declare class CartPage extends BaseComponent {
    constructor(title: string, content: string);
    renderCart(e: HTMLElement): void;
}
export default CartPage;
