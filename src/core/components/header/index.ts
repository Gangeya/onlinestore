import App from '../../..';
import BaseComponent from '../../templates/component';
const cartimg=require('../../../assets/images/shopping-cart.png');
const logoimg=require('../../../assets/images/logo.png');

class Header extends BaseComponent {
  constructor() {
    super('header');
    // this.setClass('header');
    const div_header=new BaseComponent('div').setClass('header').setClass('container').render(this);
    const logo=new BaseComponent('div').setClass('logo').render(div_header);
    new BaseComponent('img').setAttribute('src', logoimg).setAttribute('width', '200').render(logo);
    const cartblock=new BaseComponent('div').setClass('cart-block').render(div_header);
    const totalincart=new BaseComponent('div').setClass('total-in-cart').render(cartblock);
    new BaseComponent('span').setContent('Итого в корзине: ').render(cartblock);
    new BaseComponent('span').setClass('total-price').setContent('1 258 $').render(cartblock);
    const cart=new BaseComponent('div').setClass('cart').render(cartblock);
    // new BaseComponent('div').setClass('total-price').setContent('100 $').render(this);
    const cartlink=new BaseComponent('a').setClass('cart-link').setAttribute('href','#cart').render(cart);
    new BaseComponent('img').setAttribute('src', cartimg).setAttribute('width', '32').setAttribute('heigth', '32').render(cartlink);
    new BaseComponent('span').setClass('cart-count').setContent('2').render(cartlink);
    const bread=new BaseComponent('div').setClass('breadcrumbs').render(this);
    const breadul=new BaseComponent('ul').setClass('breadcrumbs-list').render(bread);
    const limain=new BaseComponent('li').render(breadul);
    new BaseComponent('a').setAttribute('href','#main').setContent('Main').render(limain);
    const product=new BaseComponent('li').render(breadul);
    new BaseComponent('a').setAttribute('href','#product').setContent('Product').render(product);
  } 
  
}


export default Header;
