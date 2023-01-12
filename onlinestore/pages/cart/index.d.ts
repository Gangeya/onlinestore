import BaseComponent from '../../core/templates/component';
declare class CartPage extends BaseComponent {
    constructor(title: string, content: string);
    stockPlus(e: HTMLElement): void;
    stockMinus(e: HTMLElement): void;
    usePromo(e: HTMLElement): void;
    activePromo(e: HTMLElement): void;
    deactivePromo(e: HTMLElement): void;
    buy(e: HTMLElement): void;
    checkCardNumber(e: HTMLElement, event: Event): void;
    checkExpCard(e: HTMLElement, event: Event): void;
    checkCvv(e: HTMLElement, event: Event): void;
    confirm(e: HTMLElement): void;
}
export default CartPage;
