import App from '../../..';
import BaseComponent from '../../templates/component';

class Header extends BaseComponent {
  constructor() {
    super('header');
    // this.setClass('header');
    const div_header=new BaseComponent('div').setClass('header').setClass('container').render(this);
    new BaseComponent('div').setClass('logo').setContent('Logo').render(div_header);
    const cartblock=new BaseComponent('div').setClass('cart-block').render(div_header);
    new BaseComponent('div').setClass('total-price').setContent('100 $').render(cartblock);
    const cart=new BaseComponent('div').setClass('cart').render(cartblock);
    // new BaseComponent('div').setClass('total-price').setContent('100 $').render(this);
    new BaseComponent('img').setAttribute('src', '/assets/img/cart.svg').setAttribute('width', '64').setAttribute('heigth', '64').render(cart);
    new BaseComponent('span').setClass('cart-count').setContent('2').render(cart);
    const bread=new BaseComponent('div').setClass('breadcrumbs').render(this);
    const breadul=new BaseComponent('ul').setClass('breadcrumbs-list').render(bread);
    new BaseComponent('li').setContent('Main').render(breadul);
    new BaseComponent('li').setContent('Phone').render(breadul);
  } 
  
}


export default Header;
