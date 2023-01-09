import BaseComponent from '../../core/templates/component';
const mastercard = require('../../assets/images/mastercard.svg');
const visa = require('../../assets/images/visa.svg');
const qiwi = require('../../assets/images/qiwi.svg');

class CartPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    Promise.resolve()
      .then(() => {
        const main = new BaseComponent('div')
          .setClass('main')
          .setClass('container')
          .render(this);
        return main;
      })
      .then((e) => {
        this.renderCart(e);
      });
  }

  renderCart(e: HTMLElement) {
    const cart = e;
    if (cart) {
      cart.innerHTML += `<div class="products-cart">
          <div class="products-cart-inner">
            <div class="products-cart-top">
              <h1>Товары в корзине</h1>
              <label for="limit" class="limit-block">Лимит: <input type="number" class="limit" id="limit"></label>
              <div class="page-block">
                <span>Страница: </span>
                <input type="button" class="arrow" value="&lt;">
                <span class="page">1</span>
                <input type="button" class="arrow" value="&gt;">
              </div>
            </div>
            <div class="product-block">
              <div class="num">1</div>
              <img src="assets/images/thumbnail.jpg" alt="">
              <div class="product-card">
                <h3 class="product-card-title">Iphone 9</h3>
                <div class="product-card-desc">An apple mobile which is nothing like apple</div>
                <div class="product-card-other">
                  <div class="rating-block">Рейтинг: 4.5</div>
                  <div class="discount-block">Скидка: 15%</div>
                </div>

              </div>
              <div class="stock-block">
                <div class="stock">В наличии: 35</div>
                <div class="stock-control">
                  <input type="button" class="plus" value="+">
                  <span class="stock-number">1</span>
                  <input type="button" class="minus" value="-">
                </div>
                <div class="amount">300 $</div>
              </div>
            </div>
            <div class="product-block">
              <div class="num">2</div>
              <img src="assets/images/thumbnail.jpg" alt="">
              <div class="product-card">
                <h3 class="product-card-title">Iphone 9</h3>
                <div class="product-card-desc">An apple mobile which is nothing like apple</div>
                <div class="product-card-other">
                  <div class="rating-block">Рейтинг: 4.5</div>
                  <div class="discount-block">Скидка: 15%</div>
                </div>

              </div>
              <div class="stock-block">
                <div class="stock">В наличии: 35</div>
                <div class="stock-control">
                  <input type="button" class="plus" value="+">
                  <span class="stock-number">2</span>
                  <input type="button" class="minus" value="-">
                </div>
                <div class="amount">400 $</div>
              </div>
            </div>
            <div class="product-block">
              <div class="num">3</div>
              <img src="assets/images/thumbnail.jpg" alt="">
              <div class="product-card">
                <h3 class="product-card-title">Iphone 9</h3>
                <div class="product-card-desc">An apple mobile which is nothing like apple</div>
                <div class="product-card-other">
                  <div class="rating-block">Рейтинг: 4.5</div>
                  <div class="discount-block">Скидка: 15%</div>
                </div>

              </div>
              <div class="stock-block">
                <div class="stock">В наличии: 35</div>
                <div class="stock-control">
                  <input type="button" class="plus" value="+">
                  <span class="stock-number">3</span>
                  <input type="button" class="minus" value="-">
                </div>
                <div class="amount">1 000 $</div>
              </div>
            </div>        
          </div>
        </div>
        <aside class="cart-details">
            <div class="cart-details-inner">
              <h3>Корзина</h3>
              <div class="item-count-block"><span class="item-count">Товаров: 3</span></div>
              <div class="total-block"><span class="total">Итого: 4 100$</span></div>
              <div class="promo-block"><input type="text" class="promo-code" placeholder="RS for test"></input></div>
              <div class="promo-block-active"><span style="">Rolling Scopes School - 10%</span><input type="button" class="promo-code-active" value="Активировать"></input></div>
              <input type="button" class="buy" value="Купить">
            </div>
        </aside>
        <div class="modal">
          <div class="modal-block">
            <input type="text" id="name" placeholder="Имя владельца">
            <i class="fa-solid fa-circle-exclamation" name="name"></i>
          </div>
          <div class="modal-block">
            <input type="tel" id="tel" placeholder="Телефон">
            <i class="fa-solid fa-circle-exclamation" name="tel"></i>
          </div>
          <div class="modal-block">
            <input type="address" id="address" placeholder="Адрес">
            <i class="fa-solid fa-circle-exclamation" name="address"></i>
          </div>
        <div class="modal-block">
          <input type="email" id="email" placeholder="Электронная почта">
          <i class="fa-solid fa-circle-exclamation" name="email"></i>
        </div>
          <div class="card-info">
              <p class="card-info-title">Кредитная карта</p>
              <div class="card-block">
                <img src="${mastercard}" alt="mastercard" width="60">
                <div class="modal-block">
                  <input type="number" id="card" placeholder="Номер карты">
                  <i class="fa-solid fa-circle-exclamation" name="card"></i>
                </div>
              </div>
              <div class="private-data">
                <div class="modal-block">
                  <input type="text" id="expcard" placeholder="До">
                  <i class="fa-solid fa-circle-exclamation" name="expcard"></i>
                </div>
                <div class="modal-block">
                  <input type="number" id="cvv" placeholder="Код">
                  <i class="fa-solid fa-circle-exclamation" name="cvv"></i>
                </div>
              </div>
          </div>
          <div class="confirm-block">
            <input class="confirm" type="button" value="Подтвердить заказ">
          </div>
        </div>`;
    }
  }
}

export default CartPage;
