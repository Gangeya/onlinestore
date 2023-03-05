import { TProduct } from '../../core/types';
import {
  setProductsInLS,
  setStocksInLS,
  getProductsFromLS,
  getStocksFromLS,
  setCountInLS,
  setTotalPriceInLS,
  getTotalPriceFromLS,
  getCountFromLS,
} from '../localstorage/localstorage';

class Cart {
  private static instance: Cart;
  private itemsincart = getCountFromLS() || 0;
  private totalprice = getTotalPriceFromLS() || 0;
  private itemsInCart = getProductsFromLS() || ([] as string[]);
  private itemsStocksInCart = getStocksFromLS() || ([] as number[]);
  private url = 'https://dummyjson.com/';

  constructor() {
    if (Cart.instance) {
      return Cart.instance;
    }
    Cart.instance = this;
  }

  async addItem(product: TProduct, price: number) {
    const totalpriceelem = document.querySelector('.total-price');
    const cartcountelem = document.querySelector('.cart-count');
    this.totalprice += price;
    this.itemsincart++;
    this.itemsInCart.push(JSON.stringify(product));
    this.itemsStocksInCart.push(1);
    setTotalPriceInLS(this.totalprice);
    setProductsInLS(this.itemsInCart);
    setStocksInLS(this.itemsStocksInCart);
    setCountInLS(this.itemsincart);
    if (cartcountelem && totalpriceelem) {
      cartcountelem.innerHTML = `${this.itemsincart}`;
      totalpriceelem.innerHTML = `${this.totalprice} $`;
    }
  }
  async dropItem(product: TProduct, price: number) {
    const totalpriceelem = document.querySelector('.total-price');
    const cartcountelem = document.querySelector('.cart-count');
    this.totalprice -= price;
    const index = this.itemsInCart.indexOf(JSON.stringify(product));
    this.itemsincart--;
    setCountInLS(this.itemsincart);
    setTotalPriceInLS(this.totalprice);
    if (index !== -1) {
      this.itemsInCart.splice(index, 1);
      this.itemsStocksInCart.splice(index, 1);
      setProductsInLS(this.itemsInCart);
      setStocksInLS(this.itemsStocksInCart);
    }
    if (cartcountelem && totalpriceelem) {
      cartcountelem.innerHTML = `${this.itemsincart}`;
      totalpriceelem.innerHTML = `${this.totalprice} $`;
    }
  }
  stockPlus(price: number, index: number, allstocks: number) {
    const totalpriceelem = document.querySelector('.total-price');
    if (this.itemsStocksInCart[index] < allstocks) {
      this.totalprice += price;
      this.itemsStocksInCart[index]++;
      setTotalPriceInLS(this.totalprice);
      setStocksInLS(this.itemsStocksInCart);
      if (totalpriceelem) totalpriceelem.innerHTML = `${this.totalprice} $`;
    }
  }
  stockMinus(price: number, index: number) {
    const totalpriceelem = document.querySelector('.total-price');
    const cartcountelem = document.querySelector('.cart-count');
    this.totalprice -= price;
    this.itemsStocksInCart[index]--;
    setTotalPriceInLS(this.totalprice);
    setStocksInLS(this.itemsStocksInCart);
    if (this.itemsStocksInCart[index] == 0) {
      this.itemsInCart.splice(index, 1);
      this.itemsStocksInCart.splice(index, 1);
      setProductsInLS(this.itemsInCart);
      setStocksInLS(this.itemsStocksInCart);
      this.itemsincart--;
      setCountInLS(this.itemsincart);
      if (cartcountelem) cartcountelem.innerHTML = `${this.itemsInCart.length}`;
      if (this.itemsInCart.length == 0) {
        const cartcountelem = document.querySelector('.cart-count');
        if (cartcountelem) cartcountelem.innerHTML = `${this.itemsincart}`;
      }
    }
    if (totalpriceelem) totalpriceelem.innerHTML = `${this.totalprice} $`;
  }
  getItemsInCart() {
    return this.itemsInCart;
  }
  getCountItemsInCart() {
    return this.itemsInCart.length;
  }
  getTotalPrice() {
    return this.totalprice;
  }
  checkProduct(product: TProduct) {
    if (this.itemsInCart.includes(JSON.stringify(product))) return true;
    else false;
  }
  getStock(index: number) {
    return this.itemsStocksInCart[index];
  }
}
export default Cart;
