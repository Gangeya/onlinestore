import BaseComponent from '../../core/templates/component';

class ProductPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');

    // const productcontent=new BaseComponent('div').setClass('product-content').render(main);

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

  renderProductContent(e: HTMLElement) {
    const productcontent = e;
    if (productcontent) {
      productcontent.innerHTML += `
    <div class="product-content-inner">
      <div class="product-title"><h1>Iphone 9</h1></div>
      <div class="image-block">
        <div class="product-image">
          <img src="assets/images/thumbnail.jpg" alt="" srcset="">
        </div>
        <div class="product-thumnails">
          <img src="assets/images/thumbnail.jpg" width="60" alt="" srcset="">
          <img src="assets/images/thumbnail.jpg" width="60" alt="" srcset="">
          <img src="assets/images/thumbnail.jpg" width="60" alt="" srcset="">
        </div>
      </div>
      <div class="product-info-block">
        <div class="product-info-item">
          <div class="item-title">Desciption</div>
          <div class="item-content">An apple mobile which is nothing like apple</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Discount Percentage</div>
          <div class="item-content">12.96</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Rating</div>
          <div class="item-content">4.8</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Stock</div>
          <div class="item-content">94</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Brand</div>
          <div class="item-content">Apple</div>
        </div>
        <div class="product-info-item">
          <div class="item-title">Category</div>
          <div class="item-content">Smartphone</div>
        </div>
      </div>
      <div class="add-to-cart">
        <span class="total">Цена: 500 $</span>
        <input type="button" class="tocart" value="В корзину">
        <input type="button" class="buy" value="Купить">
      </div>
    </div>`;
    }
  }
}

export default ProductPage;
