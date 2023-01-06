import BaseComponent from '../../core/templates/component';
const view1 = require('../../assets/images/view1.png');
const view2 = require('../../assets/images/view2.png');
const thumbnail = require('../../assets/images/thumbnail.jpg');
import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';

class MainPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    const main = new BaseComponent('div')
      .setClass('main')
      .setClass('container')
      .render(this);
    //ASIDE
    const aside = new BaseComponent('aside').render(main);
    const filter = new BaseComponent('div').setClass('filter').render(aside);
    const filterinner = new BaseComponent('div')
      .setClass('filter-inner')
      .render(filter);
    const filterbuttons = new BaseComponent('div')
      .setClass('filter-buttons')
      .render(filterinner);
    new BaseComponent('button')
      .setClass('reset')
      .setContent('Reset')
      .render(filterbuttons);
    new BaseComponent('button')
      .setClass('copy')
      .setContent('Copy')
      .render(filterbuttons);

    const filterblock = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Category')
      .render(filterblock);

    //filter list
    const filterlist = new BaseComponent('div')
      .setClass('filter-list')
      .render(filterblock);
    const item = new BaseComponent('div').setClass('item').render(filterlist);
    new BaseComponent('input')
      .setAttribute('type', 'checkbox')
      .setAttribute('id', 'smartphone')
      .setAttribute('name', 'smartphone')
      .render(item);
    new BaseComponent('label')
      .setAttribute('for', 'smartphone')
      .setContent('Smartphone')
      .render(item);
    new BaseComponent('span').setContent('1/1').render(item);

    const item2 = new BaseComponent('div').setClass('item').render(filterlist);
    new BaseComponent('input')
      .setAttribute('type', 'checkbox')
      .setAttribute('id', 'smartphone')
      .setAttribute('name', 'smartphone')
      .render(item2);
    new BaseComponent('label')
      .setAttribute('for', 'smartphone')
      .setContent('Smartphone')
      .render(item2);
    new BaseComponent('span').setContent('1/1').render(item2);

    const filterblock2 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Brand')
      .render(filterblock2);

    //filter list2
    const filterlist2 = new BaseComponent('div')
      .setClass('filter-list')
      .render(filterblock2);
    const item11 = new BaseComponent('div')
      .setClass('item')
      .render(filterlist2);
    new BaseComponent('input')
      .setAttribute('type', 'checkbox')
      .setAttribute('id', 'apple')
      .setAttribute('name', 'apple')
      .render(item11);
    new BaseComponent('label')
      .setAttribute('for', 'apple')
      .setContent('Apple')
      .render(item11);
    new BaseComponent('span').setContent('1/1').render(item11);

    const item22 = new BaseComponent('div')
      .setClass('item')
      .render(filterlist2);
    new BaseComponent('input')
      .setAttribute('type', 'checkbox')
      .setAttribute('id', 'samsung')
      .setAttribute('name', 'samsung')
      .render(item22);
    new BaseComponent('label')
      .setAttribute('for', 'samsung')
      .setContent('Samsung')
      .render(item22);
    new BaseComponent('span').setContent('1/1').render(item22);

    const item33 = new BaseComponent('div')
      .setClass('item')
      .render(filterlist2);
    new BaseComponent('input')
      .setAttribute('type', 'checkbox')
      .setAttribute('id', 'huawie')
      .setAttribute('name', 'huawie')
      .render(item33);
    new BaseComponent('label')
      .setAttribute('for', 'huawie')
      .setContent('Huawie')
      .render(item33);
    new BaseComponent('span').setContent('1/1').render(item33);

    //block price range
    const filterblock3 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Price')
      .render(filterblock3);
    const data = new BaseComponent('div').render(filterblock3);
    new BaseComponent('span').setContent('500$').render(data);
    const range = new BaseComponent('div')
      .setClass('range')
      .render(filterblock3);
    new BaseComponent('input')
      .setAttribute('type', 'range')
      .setClass('range-price')
      .setAttribute('min', '1')
      .setAttribute('max', '100')
      .render(range);

    //block stock range
    const filterblock4 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Stock')
      .render(filterblock4);
    const data2 = new BaseComponent('div').render(filterblock4);
    new BaseComponent('span').setContent('10').render(data2);
    const range2 = new BaseComponent('div')
      .setClass('range')
      .render(filterblock4);
    new BaseComponent('input')
      .setAttribute('type', 'range')
      .setClass('range-stock')
      .setAttribute('min', '1')
      .setAttribute('max', '500')
      .render(range2);

    //CONTENT
    const contents = new BaseComponent('div').setClass('content').render(main);
    const maininner = new BaseComponent('div')
      .setClass('main-inner')
      .render(contents);
    //MAIN TOP
    const maintop = new BaseComponent('div')
      .setClass('main-top')
      .render(maininner);

    const sort = new BaseComponent('div')
      .setClass('sort-block')
      .render(maintop);
    const select = new BaseComponent('select').setClass('sort').render(sort);
    new BaseComponent('option')
      .setAttribute('value', 'price-asc')
      .setContent('Sort by price ASC')
      .render(select);
    new BaseComponent('option')
      .setAttribute('value', 'price-desc')
      .setContent('Sort by price DESC')
      .render(select);
    new BaseComponent('option')
      .setAttribute('value', 'reting-asc')
      .setContent('Sort by reting ASC')
      .render(select);
    new BaseComponent('option')
      .setAttribute('value', 'reting-desc')
      .setContent('Sort by reting DESC')
      .render(select);

    new BaseComponent('div')
      .setClass('found')
      .setContent('100')
      .render(maintop);

    const search = new BaseComponent('div')
      .setClass('search-block')
      .render(maintop);
    new BaseComponent('input')
      .setAttribute('type', 'text')
      .setClass('search')
      .setAttribute('placeholder', 'Search')
      .render(search);

    const view = new BaseComponent('div').setClass('view').render(maintop);
    new BaseComponent('img')
      .setAttribute('src', view1)
      .setAttribute('height', '27')
      .render(view);
    new BaseComponent('img')
      .setAttribute('src', view2)
      .setAttribute('width', '27')
      .render(view);

    //PRODUCT LIST
    const productlist = new BaseComponent('div')
      .setClass('products-list')
      .render(maininner);
    //PRODUCT
    // for (let i: number = 0; i < 12; i += 1) {
    //   const product = new BaseComponent('div')
    //     .setClass('product')
    //     .render(productlist);
    //   const productimg = new BaseComponent('div')
    //     .setClass('product-img')
    //     .render(product);
    //   new BaseComponent('img')
    //     .setAttribute('src', thumbnail)
    //     .setAttribute('width', '220')
    //     .render(productimg);
    //   new BaseComponent('div')
    //     .setClass('product-title')
    //     .setContent('Iphone 9')
    //     .render(product);
    //   const info = new BaseComponent('div')
    //     .setClass('product-info')
    //     .render(product);
    //   const productbottom = new BaseComponent('div')
    //     .setClass('product-bottom')
    //     .render(product);
    //   new BaseComponent('input')
    //     .setAttribute('type', 'button')
    //     .setClass('tocart')
    //     .setAttribute('value', 'В корзину')
    //     .render(productbottom);
    //   new BaseComponent('input')
    //     .setAttribute('type', 'button')
    //     .setClass('more')
    //     .setAttribute('value', 'Подробно')
    //     .render(productbottom);

    //   const infocat = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('category')
    //     .render(info);
    //   new BaseComponent('span').setContent('Category').render(infocat);
    //   new BaseComponent('span').setContent('Smartphone').render(infocat);

    //   const infobrand = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('brand')
    //     .render(info);
    //   new BaseComponent('span').setContent('Brand').render(infobrand);
    //   new BaseComponent('span').setContent('Apple').render(infobrand);

    //   const infoprice = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('price')
    //     .render(info);
    //   new BaseComponent('span').setContent('Price').render(infoprice);
    //   new BaseComponent('span').setContent('400$').render(infoprice);

    //   const infodiscount = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('discount')
    //     .render(info);
    //   new BaseComponent('span').setContent('Discount').render(infodiscount);
    //   new BaseComponent('span').setContent('10%').render(infodiscount);

    //   const inforating = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('rating')
    //     .render(info);
    //   new BaseComponent('span').setContent('Rating').render(inforating);
    //   new BaseComponent('span').setContent('4.8').render(inforating);

    //   const infostock = new BaseComponent('div')
    //     .setClass('info')
    //     .setClass('stock')
    //     .render(info);
    //   new BaseComponent('span').setContent('Stock').render(infostock);
    //   new BaseComponent('span').setContent('55').render(infostock);
    // }
    this.renderProducts();
  }

  async getData() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    return data.products;
  }

  async renderProducts() {
    let products = await this.getData();

    products.forEach((product: TProduct) => {
      let productlist = document.querySelector('.products-list');
      if (productlist) {
        productlist.innerHTML += `<div class="product">
        <div class="product-img">
          <img
            src="${product.thumbnail}"
            width="220"
          />
        </div>
        <div class="product-title">${product.title}</div>
        <div class="product-info">
          <div class="info category">
            <span>Category</span><span>${product.category}</span>
          </div>
          <div class="info brand"><span>Brand</span><span>${product.brand}</span></div>
          <div class="info price"><span>Price</span><span>${product.price}</span></div>
          <div class="info discount"><span>Discount</span><span>${product.discountPercentage}</span></div>
          <div class="info rating"><span>Rating</span><span>${product.rating}</span></div>
          <div class="info stock"><span>Stock</span><span>${product.stock}</span></div>
        </div>
        <div class="product-bottom">
          <input type="button" class="tocart" value="В корзину" /><input
            type="button"
            class="more"
            value="Подробно"
          />
        </div>
      </div>`;
      }
    });
  }
}

export default MainPage;
