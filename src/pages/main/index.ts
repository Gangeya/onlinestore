import BaseComponent from '../../core/templates/component';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const view1 = <string>require('../../assets/images/view1.png');
const view2 = <string>require('../../assets/images/view2.png');
import Api from '../../core/api/api';
import Cart from '../../core/cart/cart';
import { IProducts, MyWindow } from '../../core/types';
import { TProduct } from '../../core/types';

let DATA: IProducts;

class MainPage extends BaseComponent {
  private static instance: MainPage;
  private api = new Api();
  private cart = new Cart();
  constructor() {
    super('main');
    this.setBreadcrumbs();
    setTimeout(() => {
      this.checkActive();
    }, 0);
    if (MainPage.instance) {
      return MainPage.instance;
    }
    MainPage.instance = this;
    const main = new BaseComponent('div')
      .setClass('main')
      .setClass('container')
      .render(this);
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
      .setHandler('click', () => this.copylink())
      .render(filterbuttons);

    const filterblock = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Category')
      .render(filterblock);

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

    const filterlist2 = new BaseComponent('div')
      .setClass('filter-list')
      .render(filterblock2);
    filterlist2.id = 'brand';

    const filterblock3 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Price')
      .render(filterblock3);

    const sliderPrice = new BaseComponent('div').render(filterblock3);
    sliderPrice.id = 'slider-price';

    const filterblock4 = new BaseComponent('div')
      .setClass('filter-block')
      .render(filterinner);
    new BaseComponent('div')
      .setClass('filter-title')
      .setContent('Stock')
      .render(filterblock4);

    const sliderStock = new BaseComponent('div').render(filterblock4);
    sliderStock.id = 'slider-stock';

    const contents = new BaseComponent('div').setClass('content').render(main);
    const maininner = new BaseComponent('div')
      .setClass('main-inner')
      .render(contents);
    const maintop = new BaseComponent('div')
      .setClass('main-top')
      .render(maininner);

    const sort = new BaseComponent('div')
      .setClass('sort-block')
      .render(maintop);
    const select = new BaseComponent('select')
      .setClass('sort')
      .setHandler('change', (e: Event): Promise<void> => this.filterProduct())
      .render(sort);
    new BaseComponent('option')
      .setAttribute('value', '')
      .setAttribute('selected', 'selected')

      .setContent('Choose here')
      .render(select);
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
      .setHandler('focus', (e) => this.focus())
      .setHandler('blur', (e) => this.blur())
      .setHandler('input', (e: Event): Promise<void> => this.filterProduct())
      .setClass('search')
      .setAttribute('placeholder', 'Search')
      .render(search);

    const view = new BaseComponent('div').setClass('view').render(maintop);
    const v1: HTMLElement = new BaseComponent('img')
      .setClass('view1')
      .setHandler('click', (e) => {
        this.view(v1);
      })
      .setAttribute('src', view1)
      .setAttribute('height', '27')
      .render(view);
    const v2: HTMLElement = new BaseComponent('img')
      .setClass('view2')
      .setHandler('click', (e) => {
        this.view(v2);
      })
      .setAttribute('src', view2)
      .setAttribute('width', '27')
      .render(view);

    const productlist = new BaseComponent('div')
      .setClass('products-list')
      .render(maininner);

    this.renderContent(productlist);
  }

  focus() {
    (<HTMLElement>document.querySelector('.search')).classList.add('onfocus');
  }

  blur() {
    (<HTMLElement>document.querySelector('.search')).classList.remove(
      'onfocus'
    );
  }

  searchProduct() {
    if (
      (<HTMLElement>document.querySelector('.search')).classList.contains(
        'onfocus'
      )
    ) {
      const text = (<HTMLInputElement>document.querySelector('.search')).value;
      if (!window.location.href.includes('?search') && text != '') {
        history.replaceState(
          null,
          '',
          `?search=${
            (<HTMLInputElement>document.querySelector('.search')).value
          }`
        );
      } else if (window.location.href.includes('?search') && text != '') {
        history.replaceState(
          null,
          '',
          `?search=${
            (<HTMLInputElement>document.querySelector('.search')).value
          }`
        );
      }
      if (text == '' && window.location.href.includes('?search'))
        history.pushState(null, '', '/onlinestore/onlinestore/');
    }
  }

  async getData() {
    DATA = await this.api.getProducts();
    return DATA;
  }

  async renderContent(container: HTMLElement) {
    DATA = await this.getData();

    this.renderProducts(container, DATA.products);
    this.renderFilter('category');
    this.renderFilter('brand');
    this.renderRange(DATA.products, 'price');
    this.renderRange(DATA.products, 'stock');
  }

  sortProduct(data: TProduct[], typeSort: string): TProduct[] {
    let result: TProduct[] = [];
    switch (typeSort) {
      case 'price-asc':
        result = data.sort((a: TProduct, b: TProduct) => a.price - b.price);
        break;

      case 'price-desc':
        result = data.sort((a: TProduct, b: TProduct) => b.price - a.price);
        break;

      case 'reting-asc':
        result = data.sort((a: TProduct, b: TProduct) => a.rating - b.rating);
        break;

      case 'reting-desc':
        result = data.sort((a: TProduct, b: TProduct) => b.price - a.price);
        break;
      default:
        result = data;
        break;
    }
    return result;
  }

  async filterProduct(
    start?: number | string,
    end?: number | string,
    type?: string
  ) {
    const filters = document.querySelector('.filter')!;

    const categories = [
      ...filters.querySelectorAll<HTMLInputElement>('#category input:checked'),
    ].map((n) => n.value);

    const brands = [
      ...filters.querySelectorAll<HTMLInputElement>('#brand input:checked'),
    ].map((n) => n.value);

    const sliderPr = document.getElementById(
      'slider-price'
    ) as noUiSlider.target;
    const sliderSt = document.getElementById(
      'slider-stock'
    ) as noUiSlider.target;

    const rangePrice = sliderPr.noUiSlider?.get() as number[];
    const rangeStock = sliderSt.noUiSlider?.get() as number[];
    let startPr: number | string | undefined;
    let endPr: number | string | undefined;
    let startSt: number | string | undefined;
    let endSt: number | string | undefined;

    if (type === 'price') {
      startPr = start;
      endPr = end;
      startSt = rangeStock[0];
      endSt = rangeStock[1];
    } else if (type === 'stock') {
      startPr = rangePrice[0];
      endPr = rangePrice[1];
      startSt = start;
      endSt = end;
    }

    let filteredProducts = DATA.products.filter(
      (n) =>
        (!categories.length || categories.includes(n.category)) &&
        (!brands.length || brands.includes(n.brand)) &&
        (!startPr || startPr <= n.price) &&
        (!endPr || endPr >= n.price) &&
        (!startSt || startSt <= n.stock) &&
        (!endSt || endSt >= n.stock) &&
        (Object.values(n).filter(
          (word) =>
            String(word)
              .toLowerCase()
              .includes(
                (<HTMLInputElement>(
                  document.querySelector('.search')
                )).value.toLowerCase()
              ) === true
        ).length > 0 ||
          (<HTMLInputElement>document.querySelector('.search')).value == '')
    );

    this.setCountProducts(filteredProducts, 'category');
    this.setCountProducts(filteredProducts, 'brand');
    this.renderRange(filteredProducts, 'price');
    this.renderRange(filteredProducts, 'stock');
    this.searchProduct();

    const typeSort = document.querySelector('.sort') as HTMLSelectElement;
    filteredProducts = this.sortProduct(filteredProducts, typeSort.value);

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

  renderRange(data: TProduct[], type: string): void {
    let valuesForSlider: number[] = [];

    if (type === 'price') {
      data.forEach((product) => {
        valuesForSlider.push(product.price);
      });
    } else if (type === 'stock') {
      data.forEach((product) => {
        valuesForSlider.push(product.stock);
      });
    }

    valuesForSlider = [...new Set(valuesForSlider)].sort((a, b) => a - b);
    const min = Math.min(...valuesForSlider);
    const max = Math.max(...valuesForSlider);

    const format = {
      to: function (value: number) {
        return valuesForSlider[Math.round(value)];
      },
      from: function (value: string) {
        return valuesForSlider.indexOf(Number(value));
      },
    };
    const range = document.getElementById(
      `slider-${type}`
    ) as noUiSlider.target;

    if (range.noUiSlider) {
      range.noUiSlider.set([min, max]);
    } else {
      noUiSlider.create(range, {
        start: [min, max],
        range: { min: 0, max: valuesForSlider.length - 1 },
        step: 1,
        connect: true,
        tooltips: true,
        format: format,
      });
    }

    if (range) {
      if (range.noUiSlider) {
        range.noUiSlider.on('end', (e) => {
          this.filterProduct(e[0], e[1], type);
        });
      }
    }
  }

  renderProducts(container: HTMLElement, data: TProduct[]) {
    let allsearch = 0;
    (<HTMLElement>document.querySelector('.found')).innerHTML =
      String(allsearch);
    data.forEach((product: TProduct, i: number) => {
      if (container) {
        allsearch++;
        (<HTMLElement>document.querySelector('.found')).innerHTML =
          String(allsearch);
        const divproduct = new BaseComponent('div')
          .setClass('product')
          .setAttribute('id', product.id)
          .render(container);
        divproduct.innerHTML += `
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
        </div>`;
        const productbottom = new BaseComponent('div')
          .setClass('product-bottom')
          .render(divproduct);
        const tocart = new BaseComponent('input')
          .setClass('tocart')
          .setAttribute('value', 'В корзину')
          .setAttribute('type', 'button')
          .setHandler('click', (e: Event) =>
            this.tocart(e, product, product.price)
          )
          .render(productbottom);
        if (this.cart.checkProduct(product)) {
          tocart.classList.add('active');
        }
        const more = new BaseComponent('input')
          .setClass('more')
          .setAttribute('value', 'Подробно')
          .setAttribute('type', 'button')
          .setHandler('click', this.productlink(product))
          .render(productbottom);
      }
    });
  }

  tocart(e: Event, product: TProduct, price: number) {
    const allbuttons = document.querySelectorAll('.tocart');
    const cartbutton = e.target as HTMLElement;
    Array.from(allbuttons).indexOf(cartbutton);
    if (cartbutton?.classList.contains('active')) {
      cartbutton?.classList.remove('active');
      this.cart.dropItem(product, price);
    } else {
      cartbutton?.classList.add('active');
      this.cart.addItem(product, price);
    }
  }
  productlink(prod: TProduct) {
    return function () {
      window.location.hash = `product/${prod.id}`;
    };
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
      {}
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
      'input[type="checkbox"]'
    );
    inputs.forEach((input) => {
      input.checked = false;
    });

    this.filterProduct();
  }

  view(v: HTMLElement) {
    if (v.className == 'view2') {
      document.querySelectorAll('.product').forEach(function (e, i) {
        (<HTMLElement>document.querySelectorAll('.product')[i]).style.width =
          '330px';
        (<HTMLElement>(
          document.querySelectorAll('.product-img')[i].childNodes[1]
        )).style.width = '330px';
        (<HTMLElement>(
          document.querySelectorAll('.product-img')[i].childNodes[1]
        )).style.height = '220px';
      });
    } else {
      document.querySelectorAll('.product').forEach(function (e, i) {
        (<HTMLElement>document.querySelectorAll('.product')[i]).style.width =
          '220px';
        (<HTMLElement>(
          document.querySelectorAll('.product-img')[i].childNodes[1]
        )).style.width = '220px';
        (<HTMLElement>(
          document.querySelectorAll('.product-img')[i].childNodes[1]
        )).style.height = '147px';
      });
    }
  }
  setBreadcrumbs() {
    const ul = document.querySelector('.breadcrumbs-list') as HTMLElement;
    ul.innerHTML = `<li><a href="#main">Main</a></li>`;
  }
  copylink() {
    const input = document.querySelector('#text-copy') as HTMLInputElement;
    input.value = location.href;
    input.select();
    document.execCommand('copy');
  }
  checkActive() {
    const tocart = document.querySelectorAll('.tocart');
    const activebuttons = this.cart
      .getItemsInCart()
      .map((product) => Number(JSON.parse(product).id) - 1);
    tocart.forEach((button, index) => {
      if (activebuttons.includes(index)) {
        if (!button.classList.contains('active'))
          button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
}

export default MainPage;
