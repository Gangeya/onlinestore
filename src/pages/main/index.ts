import BaseComponent from '../../core/templates/component';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const view1 = <string>require('../../assets/images/view1.png');
const view2 = <string>require('../../assets/images/view2.png');

import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';

let DATA: IProducts;

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
      .setHandler('input', (e: Event): Promise<void> => this.filterProduct())
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
      .setHandler('click', () => this.resetFilters())
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
    filterlist.id = 'category';

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

    //block price range
    const filterblock3 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Price')
      .render(filterblock3);

    const sliderPrice = new BaseComponent('div').render(filterblock3);
    sliderPrice.id = 'slider-price';

    //block stock range
    const filterblock4 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Stock')
      .render(filterblock4);

    const sliderStock = new BaseComponent('div').render(filterblock4);
    sliderStock.id = 'slider-stock';

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
  }

  async getData() {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    DATA = await response.json();
    return DATA;
  }

  async filterProduct() {
    const filters = document.querySelector('.filter')!;

    const categories = [
      ...filters.querySelectorAll<HTMLInputElement>('#category input:checked'),
    ].map((n) => n.value);

    const brands = [
      ...filters.querySelectorAll<HTMLInputElement>('#brand input:checked'),
    ].map((n) => n.value);

    const filteredProducts = DATA.products.filter(
      (n) =>
        (!categories.length || categories.includes(n.category)) &&
        (!brands.length || brands.includes(n.brand)),
    );

    this.setCountProducts(filteredProducts, 'category');
    this.setCountProducts(filteredProducts, 'brand');

    const container: HTMLElement | null =
      document.querySelector('.products-list');
    if (container) {
      container.innerHTML = '';
      this.renderProducts(container, filteredProducts);
    }
  }

  setCountProducts(data: TProduct[], typefilter: string): void {
    const list: string[] = [];
    DATA.products.forEach((product) => {
      if (typefilter === 'category') {
        list.push(product.category);
      } else if (typefilter === 'brand') {
        list.push(product.brand);
      }
    });

    const set = new Set(list);

    let count: number;
    let mask = 0;
    set.forEach((item) => {
      if (typefilter === 'category') {
        count = data.filter((n) => n.category === item).length;
      } else if (typefilter === 'brand') {
        count = data.filter((n) => n.brand === item).length;
      }

      const dataset = mask + item.replace(/[\s.,'&%]/g, '');

      const spanCount = document.querySelector(`[data-${dataset}]`);
      if (spanCount) {
        spanCount.innerHTML = count + spanCount.innerHTML.slice(1);
      }
      mask += 1;
    });
  }

  async renderContent(container: HTMLElement) {
    DATA = await this.getData();

    this.renderProducts(container, DATA.products);
    this.renderFilter('category');
    this.renderFilter('brand');
    this.renderRangePrice(DATA.products);
    //this.renderRange(DATA.products);
  }

  renderRangePrice(data: TProduct[]) {
    let valuesForSlider: number[] = [];

    data.forEach((product) => {
      valuesForSlider.push(product.price);
    });

    valuesForSlider = [...new Set(valuesForSlider)].sort((a, b) => a - b);
    let min = Math.min(...valuesForSlider);
    let max = Math.max(...valuesForSlider);
    console.log(valuesForSlider);

    let format = {
      to: function (value: number) {
        return valuesForSlider[Math.round(value)];
      },
      from: function (value: string) {
        return valuesForSlider.indexOf(Number(value));
      },
    };
    const rangePrice = document.getElementById('slider-price');
    if (rangePrice) {
      noUiSlider.create(rangePrice, {
        start: [min, max],
        // A linear range from 0 to 15 (16 values)
        range: { min: 0, max: valuesForSlider.length - 1 },
        // steps of 1
        step: 1,
        connect: true,
        tooltips: true,
        format: format,
        //pips: { mode: , format: format },
      });
    }
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

    const filterlist: string[] = [];
    DATA.products.forEach((product) => {
      if (name === 'category') {
        filterlist.push(product.category);
      } else if (name === 'brand') {
        filterlist.push(product.brand);
      }
    });

    filter = filterlist.reduce(
      (acc: { [key: string]: number }, cur: string) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      },
      {},
    );

    const categoriesContainer = document.getElementById(name);
    let mask = 0;
    Object.keys(filter).forEach((key) => {
      const dataset = mask + key.replace(/[\s.,'&%]/g, '');

      if (categoriesContainer) {
        categoriesContainer.innerHTML += `<div class="item">
      <input type="checkbox" id="${key}" value="${key}" name="${key}">
      <label for="smartphone">${key}</label>
      <span data-${dataset}>${filter[key]}/${filter[key]}</span>
      </div>`;
      }
      mask += 1;
    });
  }

  resetFilters() {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[type="checkbox"]',
    );
    inputs.forEach((input) => {
      input.checked = false;
    });

    this.filterProduct();
  }
}

export default MainPage;
