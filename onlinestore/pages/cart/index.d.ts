import BaseComponent from '../../core/templates/component';
import { TProduct } from '../../core/types';
declare class CartPage extends BaseComponent {
    private cart;
    constructor();
    stockPlus(product: TProduct, e: HTMLElement): void;
    stockMinus(product: TProduct, e: HTMLElement): void;
    usePromo(e: HTMLElement): void;
    activePromo(e: HTMLElement): void;
    deactivePromo(e: HTMLElement): void;
    buy(e: HTMLElement): void;
    checkCardNumber(e: HTMLElement, event: Event): void;
    checkExpCard(e: HTMLElement, event: Event): void;
    checkCvv(e: HTMLElement, event: Event): void;
    confirm(e: HTMLElement): void;
    setBreadcrumbs(): void;
}
export default CartPage;
