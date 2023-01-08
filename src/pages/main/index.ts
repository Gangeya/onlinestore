import BaseComponent from '../../core/templates/component';
const view1 = require('../../assets/images/view1.png');
const view2 = require('../../assets/images/view2.png');
const thumbnail = require('../../assets/images/thumbnail.jpg');
import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';

let DATA: IProducts;
//let test: string;

class MainPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');

    const main = new BaseComponent('div')
      .setClass('main')
      .setClass('container')
      .render(this);
    //ASIDE
    const aside = new BaseComponent('aside').render(main);
    const filter = new BaseComponent('div')
      .setClass('filter')
      .setHandler('input', (e) => this.filterProduct())
      .render(aside);
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
    filterlist.id = 'categories';

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
    filterlist2.id = 'brand';
    const item11 = new BaseComponent('div')
      .setClass('item')
      .render(filterlist2);

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

    this.renderContent(productlist);
    //this.renderProducts(productlist);
    //this.renderFilter(filterlist);
  }

  async getData() {
    let response = await fetch('https://dummyjson.com/products?limit=100');
    DATA = await response.json();
    return DATA;
  }

  async filterProduct() {
    const filters = document.querySelector('.filter')!;

    const categoryes = [
      ...filters.querySelectorAll('#categories input:checked'),
    ];
    console.log('filter');
  }

  async renderContent(container: HTMLElement) {
    DATA = await this.getData();

    this.renderProducts(container, DATA.products);
    this.renderFilter('categories');
    this.renderFilter('brand');
  }

  renderProducts(container: HTMLElement, data: TProduct[]) {
    data.forEach((product: TProduct) => {
      if (container) {
        container.innerHTML += `<div class="product">
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

  renderFilter(name: string) {
    let filter: { [key: string]: number } = {};

    let filterlist: string[] = [];
    DATA.products.forEach((product) => {
      filterlist.push(product['category']);
    });

    filter = filterlist.reduce(
      (acc: { [key: string]: number }, cur: string) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      },
      {},
    );

    let categoriesContainer = document.getElementById(name);

    Object.keys(filter).forEach((key) => {
      if (categoriesContainer) {
        categoriesContainer.innerHTML += `<div class="item">
      <input type="checkbox" id="${key}" name="${key}">
      <label for="smartphone">${key}</label>
      <span>${filter[key]}/${filter[key]}</span>
      </div>`;
      }
    });
  }
}

export default MainPage;
