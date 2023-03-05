import { TProduct } from '../../core/types';
declare class Cart {
    private static instance;
    private itemsincart;
    private totalprice;
    private itemsInCart;
    private itemsStocksInCart;
    private url;
    constructor();
    addItem(product: TProduct, price: number): Promise<void>;
    dropItem(product: TProduct, price: number): Promise<void>;
    stockPlus(price: number, index: number, allstocks: number): void;
    stockMinus(price: number, index: number): void;
    getItemsInCart(): string[];
    getCountItemsInCart(): number;
    getTotalPrice(): number;
    checkProduct(product: TProduct): true | undefined;
    getStock(index: number): number;
}
export default Cart;
