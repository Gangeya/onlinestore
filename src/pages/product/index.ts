import BaseComponent from '../../core/templates/component';
import { IProducts, MyWindow } from '../../core/types';
import Api from '../../core/api/api';
import { TProduct } from '../../core/types';
import Cart from '../../core/cart/cart';
class ProductPage extends BaseComponent {
  private api = new Api();
  private cart = new Cart();

  private id = Number(window.location.hash.slice(1).split('/').at(-1));

  private product?: TProduct;

  constructor() {
    super('main');
    Promise.resolve()
      .then(() => {
        const main = new BaseComponent('div')
          .setClass('main')
          .setClass('container')
          .render(this);
        const productcontent = new BaseComponent('div')
          .setClass('product-content')
          .render(main);
        return productcontent;
      })
      .then((e) => {
        this.renderProductContent(e);
      });
  }

  async renderProductContent(e: HTMLElement) {
    let toCartClass = '';
    if (
      this.cart
        .getItemsInCart()
        .filter((product) => JSON.parse(product).id == String(this.id)).length >
      0
    )
      toCartClass = 'tocart active';
    else toCartClass = 'tocart';

    this.product = await this.api.getProduct(this.id);
    this.setBreadcrumbs();
    const productcontent = e;
    productcontent.onclick = (e) => this.action(e);
    let images = '';
    this.product?.images.forEach(
      (i) => (images += `<img src="${i}" width="60">`)
    );
    if (productcontent) {
      productcontent.innerHTML += `
    <div class="product-content-inner">
      <div class="product-title"><h1>${this.product?.title}</h1></div>
      <div class="image-block">
        <div class="product-image">
          <img src="${this.product?.thumbnail}" alt="" srcset="">
        </div>
        <div class="product-thumnails">
          ${images}
        </div>
      </div>
      <div class="product-info-block">
        <div class="product-info-item">
          <div class="item-title">Desciption</div>
          <div class="item-content">${this.product?.description}</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Discount Percentage</div>
          <div class="item-content">${this.product?.discountPercentage}</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Rating</div>
          <div class="item-content">${this.product?.rating}</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Stock</div>
          <div class="item-content">${this.product?.stock}</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Brand</div>
          <div class="item-content">${this.product?.brand}</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Category</div>
          <div class="item-content">${this.product?.category}</div>
        </div>
      </div>
      <div class="add-to-cart">
        <span class="total">Цена: ${this.product?.price} $</span>
        <input type="button" class="${toCartClass}" value="В корзину">
        <input type="button" class="buy" value="Купить">
      </div>
    </div>`;
    }
  }
  action(e: Event) {
    const tocart = e.target;
    if (
      tocart instanceof HTMLElement &&
      tocart.classList.contains('tocart') &&
      this.product
    ) {
      if (tocart.classList.contains('active')) {
        this.cart.dropItem(this.product, this.product?.price);
        tocart.classList.remove('active');
      } else {
        this.cart.addItem(this.product, this.product?.price);
        tocart.classList.add('active');
      }
    } else if (
      tocart instanceof HTMLElement &&
      tocart.classList.contains('buy') &&
      this.product
    ) {
      const buttontocart = document.querySelector(
        '.tocart'
      ) as HTMLInputElement;
      buttontocart.click();
      location.hash = '#cart';
      (document.querySelector('.buy') as HTMLInputElement).click();
    }
  }
  setBreadcrumbs() {
    const ul = document.querySelector('.breadcrumbs-list') as HTMLElement;
    ul.innerHTML = `<li><a href="#main">Main</a> &#10148;</li>
    <li>${this.product?.category} &#10148;</li>
    <li>${this.product?.brand} &#10148;</li>
    <li>${this.product?.title}</li>`;
  }
}

export default ProductPage;
