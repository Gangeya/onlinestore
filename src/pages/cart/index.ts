import BaseComponent from '../../core/templates/component';
const thumbnail = <string>require('../../assets/images/thumbnail.jpg');
const mastercard = <string>require('../../assets/images/mastercard.svg');
const visa = <string>require('../../assets/images/visa.svg');
const qiwi = <string>require('../../assets/images/qiwi.svg');

class CartPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    const main=new BaseComponent('div').setClass('main').setClass('container').render(this);
      const productscart=new BaseComponent('div').setClass('products-cart').render(main);
      const productscartinner=new BaseComponent('div').setClass('products-cart-inner').render(productscart);
      const productscarttop=new BaseComponent('div').setClass('products-cart-top').render(productscartinner);
        const h1=new BaseComponent('h1').setContent('Товары в корзине').render(productscarttop);
        const label=new BaseComponent('label').setClass('limit-block').setAttribute('for','limit').setContent('limit').setContent('Лимит: ').render(productscarttop);
        const input=new BaseComponent('input').setAttribute('type','number').setAttribute('id','limit').setClass('limit').render(label);
      const pageblock=new BaseComponent('div').setClass('page-block').render(productscarttop);
      new BaseComponent('span').setContent('Страница: ').render(pageblock);
      new BaseComponent('input').setAttribute('type','button').setClass('arrow').setAttribute('value','<').render(pageblock);
      new BaseComponent('span').setContent('1').setClass('page').render(pageblock);
      new BaseComponent('input').setAttribute('type','button').setClass('arrow').setAttribute('value','>').render(pageblock);
      for(let i:number=0;i<3;i+=1){
        const productblock=new BaseComponent('div').setClass('product-block').render(productscartinner);
          new BaseComponent('div').setClass('num').setContent(String(i+1)).render(productblock);
          new BaseComponent('img').setAttribute('src',thumbnail).render(productblock);
            const productcard=new BaseComponent('div').setClass('product-card').render(productblock);
            new BaseComponent('h3').setClass('product-card-title').setContent('Iphone 9').render(productcard);
            new BaseComponent('div').setClass('product-card-desc').setContent('An apple mobile which is nothing like apple').render(productcard);
            const productcardother=new BaseComponent('div').setClass('product-card-other').render(productcard);
              new BaseComponent('div').setClass('rating-block').setContent('Рейтинг: 4.5').render(productcardother);
              new BaseComponent('div').setClass('discount').setContent('Скидка: 15%').render(productcardother);
        const stockblock=new BaseComponent('div').setClass('stock-block').render(productblock);
          new BaseComponent('div').setClass('stock').setContent('В наличии: 35').render(stockblock);
          const stockcontrol=new BaseComponent('div').setClass('stock-control').render(stockblock);
            const plus:HTMLElement=new BaseComponent('input').setHandler('click',e=>this.stockPlus(plus)).setAttribute('type','button').setClass('plus').setAttribute('value','+').render(stockcontrol);
            new BaseComponent('span').setClass('stock-number').setContent('1').render(stockcontrol);
            const minus:HTMLElement=new BaseComponent('input').setHandler('click',e=>this.stockMinus(minus)).setAttribute('type','button').setClass('minus').setAttribute('value','-').render(stockcontrol);
          new BaseComponent('div').setClass('amount').setContent('300 $').render(stockblock);}
      const aside=new BaseComponent('aside').setClass('cart-details').render(main);
        const cartdetailsinner=new BaseComponent('div').setClass('cart-details-inner').render(aside);
        new BaseComponent('h3').setContent('Корзина').render(cartdetailsinner);
        const itemcountblock=new BaseComponent('div').setClass('item-count-block').render(cartdetailsinner);
          new BaseComponent('span').setClass('item-count').setContent('Товаров: 3').render(itemcountblock);
        const totalblock=new BaseComponent('div').setClass('total-block').render(cartdetailsinner);
          new BaseComponent('span').setClass('total').setContent('Итого: 900$').render(totalblock);
        const totalblockdiscount=new BaseComponent('div').setClass('total-block-discount').render(cartdetailsinner);
          new BaseComponent('span').setClass('total-discount').render(totalblockdiscount);
        const promoblockactive=new BaseComponent('div').setClass('promo-block-active').render(cartdetailsinner);
          new BaseComponent('span').setClass('acitve-promos').setContent('Активные промокоды').render(promoblockactive);
          const promoblockactiveinner=new BaseComponent('div').setClass('promo-block-active-inner').render(promoblockactive);
          new BaseComponent('span').setContent('RS School - 10%').render(promoblockactiveinner);
          const promocodedeactive:HTMLElement=new BaseComponent('input').setHandler('click',(e)=>this.deactivePromo(promocodedeactive)).setAttribute('type','button').setClass('promo-code-deactive').setAttribute('value','Деактивировать').render(promoblockactiveinner);

        const promoblock=new BaseComponent('div').setClass('promo-block').render(cartdetailsinner);
          const promocode:HTMLElement=new BaseComponent('input').setHandler('input',(e)=>this.usePromo(promocode)).setAttribute('type','text').setClass('promo-code').setAttribute('placeholder','RS for test').render(promoblock);
        const promoblockdoactive=new BaseComponent('div').setClass('promo-block-do-active').render(cartdetailsinner);
          new BaseComponent('span').setContent('RS School - 10%').render(promoblockdoactive);
          const promocodedoactive:HTMLElement=new BaseComponent('input').setHandler('click',(e)=>this.activePromo(promocodedoactive)).setAttribute('type','button').setClass('promo-code-active').setAttribute('value','Активировать').render(promoblockdoactive);
        const buy:HTMLElement=new BaseComponent('input').setHandler('click',(e)=>this.buy(buy)).setAttribute('type','button').setClass('buy').setAttribute('value','Купить').render(cartdetailsinner);
      //modal
      const modal=new BaseComponent('div').setClass('modal').setHTML(`<div class="modal-block">
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
      </div>`).render(main);
        const cardinfo=new BaseComponent('div').setClass('card-info').render(modal);
        new BaseComponent('p').setClass('card-info-title').setContent('Кредитная карта').render(cardinfo);
        const cardblock=new BaseComponent('div').setClass('card-block').render(cardinfo);
        new BaseComponent('img').setClass('card-img').setAttribute('src',mastercard).setAttribute('width','60').setAttribute('height','40').render(cardblock);
        const modalblock1=new BaseComponent('div').setClass('modal-block').render(cardblock);
        const cardnumber:HTMLElement=new BaseComponent('input').setHandler('input',(e)=>this.checkCardNumber(cardnumber,e)).setAttribute('type','text').setAttribute('id','card').setAttribute('placeholder','Номер карты').render(modalblock1);
        new BaseComponent('i').setAttribute('name','card').setClass('fa-solid').setClass('fa-circle-exclamation').render(modalblock1);
        const privatedata=new BaseComponent('div').setClass('private-data').render(cardinfo);
        const modalblock2=new BaseComponent('div').setClass('modal-block').render(privatedata);
        const expcard:HTMLElement=new BaseComponent('input').setHandler('input',(e)=>this.checkExpCard(expcard,e)).setAttribute('type','text').setAttribute('id','expcard').setAttribute('placeholder','До').render(modalblock2);
        new BaseComponent('i').setAttribute('name','expcard').setClass('fa-solid').setClass('fa-circle-exclamation').render(modalblock2);
        
        const modalblock3=new BaseComponent('div').setClass('modal-block').render(privatedata);
        const cvv:HTMLElement=new BaseComponent('input').setHandler('input',(e)=>this.checkCvv(cvv,e)).setAttribute('type','number').setAttribute('id','cvv').setAttribute('placeholder','Код').render(modalblock3);
        new BaseComponent('i').setAttribute('name','cvv').setClass('fa-solid').setClass('fa-circle-exclamation').render(modalblock3);
        
        const confirmblock=new BaseComponent('div').setClass('confirm-block').render(modal);
        const confirm:HTMLElement=new BaseComponent('input').setHandler('click',(e)=>this.confirm(confirm)).setAttribute('type','button').setClass('confirm').setAttribute('value','Подтвердить заказ').render(confirmblock); 
  }
  stockPlus(e:HTMLElement){
    if(e.nextElementSibling){
      const index=Array.from(document.querySelectorAll('.plus')).indexOf(e);
      const allstocks=Number(document.querySelectorAll('.stock')[index].textContent?.replace(/\D/g,''));
      const numberstock=document.querySelectorAll('.stock-number')[index];
      const amount=document.querySelectorAll('.amount')[index];
      const total=document.querySelector('.total') as Element;
      const totaldiscount=document.querySelector('.total-discount') as Element;
      if(Number(document.querySelectorAll('.stock-number')[index].textContent)<allstocks){
        total.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))+Number(amount.textContent?.replace(/\D/g,''))/Number(numberstock.textContent))} $`;
        totaldiscount.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))*0.9)} $`;
        amount.innerHTML=String(Number(amount.textContent?.replace(/\D/g,''))+Number(amount.textContent?.replace(/\D/g,''))/Number(numberstock.textContent))+' $';
        numberstock.innerHTML=String(Number(numberstock.textContent)+1);
      }
    }
  }
  stockMinus(e:HTMLElement){
    if(e.previousElementSibling){
      const index=Array.from(document.querySelectorAll('.minus')).indexOf(e);
      const numberstock=document.querySelectorAll('.stock-number')[index];
      const amount=document.querySelectorAll('.amount')[index];
      const total=document.querySelector('.total') as Element;
      const totaldiscount=document.querySelector('.total-discount') as Element;
      if(Number(document.querySelectorAll('.stock-number')[index].textContent)==1){
        document.querySelectorAll('.item-count')[0].innerHTML=`Товаров: ${String(Number(document.querySelector('.item-count')?.textContent?.replace(/\D/g,''))-1)}`;
        document.querySelectorAll('.product-block')[index].remove();
        total.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))-Number(amount.textContent?.replace(/\D/g,''))/Number(numberstock.textContent))} $`;
        totaldiscount.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))*0.9)} $`;
        const allnum=document.querySelectorAll('.num');
        for(let i:number=index;i<allnum.length;i++){
          document.querySelectorAll('.num')[i].innerHTML=String(i+1);
        }
      }
      else{
        total.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))-Number(amount.textContent?.replace(/\D/g,''))/Number(numberstock.textContent))} $`;
        totaldiscount.innerHTML=`Итого: ${String(Number(total.textContent?.replace(/\D/g,''))*0.9)} $`;
        amount.innerHTML=String(Number(amount.textContent?.replace(/\D/g,''))-Number(amount.textContent?.replace(/\D/g,''))/Number(numberstock.textContent))+' $';
        document.querySelectorAll('.stock-number')[index].innerHTML=String(Number(document.querySelectorAll('.stock-number')[index].textContent)-1);
      }
    }
  }
  usePromo(e:HTMLElement){
    if((<HTMLInputElement>e).value==='RS' && (<HTMLInputElement>document.querySelector('.promo-block-active')).style.display!=='flex'){
      (<HTMLInputElement>document.querySelector('.promo-block-do-active')).style.display='flex';
    }
    else{
      (<HTMLInputElement>document.querySelector('.promo-block-do-active')).style.display='none';
    }

  }
  activePromo(e:HTMLElement){
    (<HTMLInputElement>document.querySelector('.promo-block-active')).style.display='flex';
    (<HTMLInputElement>document.querySelectorAll('.total-block-discount')[0]).style.display='flex';
    (<HTMLInputElement>document.querySelectorAll('.total-discount')[0]).innerHTML=`Итого: ${String(Number(document.querySelector('.total')?.textContent?.replace(/\D/g,''))*0.9)} $`;
    (<HTMLInputElement>document.querySelectorAll('.total')[0]).style.textDecoration='line-through';
    (<HTMLInputElement>document.querySelector('.promo-block-do-active')).style.display='none';
    (<HTMLElement>document.querySelector('.total')).innerHTML=`Итого: ${String(Number(document.querySelector('.total')?.textContent?.replace(/\D/g,'')))} $`;  
  }
  deactivePromo(e:HTMLElement){
    (<HTMLInputElement>document.querySelector('.promo-block-do-active')).style.display='flex';
    (<HTMLInputElement>document.querySelectorAll('.total-block-discount')[0]).style.display='none';
    (<HTMLInputElement>document.querySelectorAll('.total')[0]).style.textDecoration='none';
    (<HTMLInputElement>document.querySelector('.promo-block-active')).style.display='none';
    (<HTMLElement>document.querySelector('.total')).innerHTML=`Итого: ${String(Number(document.querySelector('.total-discount')?.textContent?.replace(/\D/g,''))/0.9)} $`;
  }
  buy(e:HTMLElement){
    (<HTMLElement>document.querySelector('.modal')).style.display='flex';
    (<HTMLElement>document.querySelector('.pop-up-bg')).style.display='block';
  }
  checkCardNumber(e:HTMLElement,event:Event){
    let regExp = /[0-9]{4}/;

    const cardimg=document.querySelector('.card-img');
    // (<HTMLInputElement>e).value = (<HTMLInputElement>e).value.replace(/[^\d.]/g, '');
    if((<HTMLInputElement>e).value[0]===String(4)){
      cardimg?.setAttribute('src',visa);
    }
    else if((<HTMLInputElement>e).value[0]===String(5)){
      cardimg?.setAttribute('src',mastercard);
    }
    else if((<HTMLInputElement>e).value[0]===String(8)){
      cardimg?.setAttribute('src',qiwi);
    }

    if(  (<HTMLInputElement>e).value.length > 19 || !(<HTMLInputElement>e).value.replace(/[^0-9\.]/g, '')){
      (<HTMLInputElement>e).value = (<HTMLInputElement>e).value.slice(0, (<HTMLInputElement>e).value.length - 1)
      return
  }

    if( (<InputEvent>event).inputType === "deleteContentBackward" && regExp.test((<HTMLInputElement>e).value.slice(-4)) ){
      (<HTMLInputElement>e).value = (<HTMLInputElement>e).value.slice(0, (<HTMLInputElement>e).value.length - 1)
      return
      }
    if( regExp.test((<HTMLInputElement>e).value.slice(-4)) && (<HTMLInputElement>e).value.length < 19){
      (<HTMLInputElement>e).value += " "
    }
  }
  checkExpCard(e:HTMLElement,event:Event){
    const regExp = /[0-9]{2}/;
    if((<HTMLInputElement>e).value.length > 5 || !(<HTMLInputElement>e).value.replace(/[^0-9\.]/g, '')){
      (<HTMLInputElement>e).value = (<HTMLInputElement>e).value.slice(0, (<HTMLInputElement>e).value.length - 1)
      return
    }
    if( (<InputEvent>event).inputType === "deleteContentBackward" && regExp.test((<HTMLInputElement>e).value.slice(-2)) ){
      (<HTMLInputElement>e).value = (<HTMLInputElement>e).value.slice(0, (<HTMLInputElement>e).value.length - 1)
      return
    }
    if( regExp.test((<HTMLInputElement>e).value.slice(-2)) && (<HTMLInputElement>e).value.length < 5){
      (<HTMLInputElement>e).value += "/"
    }
    
  }
  checkCvv(e:HTMLElement,event:Event){
    if(!(<HTMLInputElement>e).value.replace(/^[0-9]{4}$/, ''))
    (<HTMLInputElement>e).value=(<HTMLInputElement>e).value.slice(0, (<HTMLInputElement>e).value.length - 1);
  }
  confirm(e:HTMLElement){
    let c=0;
    //name
    const name=(<HTMLInputElement>document.querySelector('#name')).value;
    if(name.split(' ').every(e=>e.length>2) && name.split(' ').length>1){
      (<HTMLElement>document.querySelector('#name')?.nextElementSibling).style.display='none';
      c++;
    }
    else{
      (<HTMLElement>document.querySelector('#name')?.nextElementSibling).style.display='block';
    }
    //phone
    const tel=(<HTMLInputElement>document.querySelector('#tel')).value;
    if(tel.replace(/^[\+][0-9]{8}$/, '')){
      (<HTMLInputElement>document.querySelector('#tel')?.nextElementSibling).style.display='none';
      c++;
    }
    else{
      (<HTMLInputElement>document.querySelector('#tel')?.nextElementSibling).style.display='block';
    }
    //address
    const address=(<HTMLInputElement>document.querySelector('#address')).value;
    if(address.split(' ').every(e=>e.length>4) && address.split(' ').length>2){
      (<HTMLInputElement>document.querySelector('#address')?.nextElementSibling).style.display='none';
      c++;
    }
    else{
      (<HTMLInputElement>document.querySelector('#address')?.nextElementSibling).style.display='block';
    }
    
    //email
    if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test((<HTMLInputElement>document.querySelector('#email')).value)){
      (<HTMLInputElement>document.querySelector('#email')?.nextElementSibling).style.display='block';
    }
    else{
      (<HTMLInputElement>document.querySelector('#email')?.nextElementSibling).style.display='none';
      c++;
    }

    //cardnumber
    if((<HTMLInputElement>document.querySelector('#card')).value.length!==19){
      (<HTMLInputElement>document.querySelector('#card')?.nextElementSibling).style.display='block';
    }
    else{
      (<HTMLInputElement>document.querySelector('#card')?.nextElementSibling).style.display='none';
      c++;
    }

    //expcard
    if((<HTMLInputElement>document.querySelector('#expcard')).value.length!==5  && Number((<HTMLInputElement>document.querySelector('#expcard')).value.split('/')[0])<13 && Number((<HTMLInputElement>document.querySelector('#expcard')).value.split('/')[0])>0){
      (<HTMLInputElement>document.querySelector('#expcard')?.nextElementSibling).style.display='block';
    }
    else{
      (<HTMLInputElement>document.querySelector('#expcard')?.nextElementSibling).style.display='none';
      c++;
    }
    //сvv
    if((<HTMLInputElement>document.querySelector('#cvv')).value.length!==3){
      (<HTMLInputElement>document.querySelector('#cvv')?.nextElementSibling).style.display='block';
    }
    else{
      (<HTMLInputElement>document.querySelector('#cvv')?.nextElementSibling).style.display='none';
      c++;
    }
    if(c===7){
      alert("Заказ оформлен!")
      setTimeout(()=>window. location. href  = "/#main",3000);
    }
  }
}

export default CartPage;
