import BaseComponent from '../../core/templates/component';

class MainPage extends BaseComponent {
  constructor(title: string, content: string) {
    super('main');
    // new BaseComponent('h1').setContent(title).render(this);
    // new BaseComponent('p').setContent(content).render(this);
    // new BaseComponent('aside').setContent('This is Aside').render(this);
    // new BaseComponent('article').setContent('This is Article').render(this);
    const main=new BaseComponent('div').setClass('main').setClass('container').render(this);
    //ASIDE
    const aside=new BaseComponent('aside').render(main);
    const filter=new BaseComponent('div').setClass('filter').render(aside);
    const filterinner=new BaseComponent('div').setClass('filter-inner').render(filter);
    const filterbuttons=new BaseComponent('div').setClass('filter-buttons').render(filterinner);
    new BaseComponent('button').setContent('Reset').render(filterbuttons);
    new BaseComponent('button').setContent('Copy').render(filterbuttons);

    const filterblock=new BaseComponent('div').setClass('filter-block').render(filterinner);
    new BaseComponent('div').setClass('filter-title').setContent('Category').render(filterblock);
    
    //filter list
    const filterlist=new BaseComponent('div').setClass('filter-list').render(filterblock);
    const item=new BaseComponent('div').setClass('item').render(filterlist);
    new BaseComponent('input').setAttribute('type','checkbox').setAttribute('id','smartphone').setAttribute('name','smartphone').render(item);
    new BaseComponent('label').setAttribute('for','smartphone').setContent('Smartphone').render(item);
    new BaseComponent('span').setContent('1/1').render(item);
    
    const item2=new BaseComponent('div').setClass('item').render(filterlist);
    new BaseComponent('input').setAttribute('type','checkbox').setAttribute('id','smartphone').setAttribute('name','smartphone').render(item2);
    new BaseComponent('label').setAttribute('for','smartphone').setContent('Smartphone').render(item2);
    new BaseComponent('span').setContent('1/1').render(item2);

    const filterblock2=new BaseComponent('div').setClass('filter-block').render(filterinner);
    new BaseComponent('div').setClass('filter-title').setContent('Brand').render(filterblock2);

    //filter list2
    const filterlist2=new BaseComponent('div').setClass('filter-list').render(filterblock2);
    const item11=new BaseComponent('div').setClass('item').render(filterlist2);
    new BaseComponent('input').setAttribute('type','checkbox').setAttribute('id','apple').setAttribute('name','apple').render(item11);
    new BaseComponent('label').setAttribute('for','apple').setContent('Apple').render(item11);
    new BaseComponent('span').setContent('1/1').render(item11);
    
    const item22=new BaseComponent('div').setClass('item').render(filterlist2);
    new BaseComponent('input').setAttribute('type','checkbox').setAttribute('id','samsung').setAttribute('name','samsung').render(item22);
    new BaseComponent('label').setAttribute('for','samsung').setContent('Samsung').render(item22);
    new BaseComponent('span').setContent('1/1').render(item22);

    const item33=new BaseComponent('div').setClass('item').render(filterlist2);
    new BaseComponent('input').setAttribute('type','checkbox').setAttribute('id','huawie').setAttribute('name','huawie').render(item33);
    new BaseComponent('label').setAttribute('for','huawie').setContent('Huawie').render(item33);
    new BaseComponent('span').setContent('1/1').render(item33);

    //block price range
    const filterblock3=new BaseComponent('div').setClass('filter-block').render(filterinner);
    new BaseComponent('div').setClass('filter-title').setContent('Price').render(filterblock3);
    const data=new BaseComponent('div').render(filterblock3);
    new BaseComponent('span').setContent('500$').render(data);
    const range=new BaseComponent('div').setClass('range').render(filterblock3);
    new BaseComponent('input').setAttribute('type','range').setAttribute('min','1').setAttribute('max','100').render(range);

    //block stock range
    const filterblock4=new BaseComponent('div').setClass('filter-block').render(filterinner);
    new BaseComponent('div').setClass('filter-title').setContent('Stock').render(filterblock4);
    const data2=new BaseComponent('div').render(filterblock4);
    new BaseComponent('span').setContent('10').render(data2);
    const range2=new BaseComponent('div').setClass('range').render(filterblock4);
    new BaseComponent('input').setAttribute('type','range').setAttribute('min','1').setAttribute('max','500').render(range2);

    //CONTENT
    const contents=new BaseComponent('div').setClass('content').render(main);
    const maininner=new BaseComponent('div').setClass('main-inner').render(contents);
    //MAIN TOP
    const maintop=new BaseComponent('div').setClass('main-top').render(maininner);

    const sort=new BaseComponent('div').setClass('sort').render(maintop);
    const select=new BaseComponent('select').render(sort);
    new BaseComponent('option').setAttribute('value','price-asc').setContent('Sort by price ASC').render(select);
    new BaseComponent('option').setAttribute('value','price-desc').setContent('Sort by price DESC').render(select);
    new BaseComponent('option').setAttribute('value','reting-asc').setContent('Sort by reting ASC').render(select);
    new BaseComponent('option').setAttribute('value','reting-desc').setContent('Sort by reting DESC').render(select);

    new BaseComponent('div').setClass('found').setContent('100').render(maintop);

    const search=new BaseComponent('div').setClass('search').render(maintop);
    new BaseComponent('input').setAttribute('type','text').setAttribute('placeholder','Search').render(search);

    const view=new BaseComponent('div').setClass('view').render(maintop);
    new BaseComponent('img').setAttribute('src','assets/img/view1.png').setAttribute('width','32').render(view);
    new BaseComponent('img').setAttribute('src','assets/img/view2.png').setAttribute('width','27').render(view);

    //PRODUCT LIST
    const productlist=new BaseComponent('div').setClass('products-list').render(maininner);
    //PRODUCT
    for(let i:number=0;i<6;i+=1){
    const product=new BaseComponent('div').setClass('product').render(productlist);
    const productimg=new BaseComponent('div').setClass('product-img').render(product);
    new BaseComponent('img').setAttribute('src','assets/img/thumbnail').setAttribute('width','220').render(productimg);
    new BaseComponent('div').setClass('product-title').setContent('Iphone 9').render(product);
    const info=new BaseComponent('div').setClass('product-info').render(product);
    
    const infocat=new BaseComponent('div').setClass('info').setClass('category').render(info);
    new BaseComponent('span').setContent('Category').render(infocat);
    new BaseComponent('span').setContent('Smartphone').render(infocat);
    
    const infobrand=new BaseComponent('div').setClass('info').setClass('brand').render(info);
    new BaseComponent('span').setContent('Brand').render(infobrand);
    new BaseComponent('span').setContent('Apple').render(infobrand);

    const infoprice=new BaseComponent('div').setClass('info').setClass('price').render(info);
    new BaseComponent('span').setContent('Price').render(infoprice);
    new BaseComponent('span').setContent('400$').render(infoprice);

    const infodiscount=new BaseComponent('div').setClass('info').setClass('discount').render(info);
    new BaseComponent('span').setContent('Discount').render(infodiscount);
    new BaseComponent('span').setContent('10%').render(infodiscount);

    const inforating=new BaseComponent('div').setClass('info').setClass('rating').render(info);
    new BaseComponent('span').setContent('Rating').render(inforating);
    new BaseComponent('span').setContent('4.8').render(inforating);

    const infostock=new BaseComponent('div').setClass('info').setClass('stock').render(info);
    new BaseComponent('span').setContent('Stock').render(infostock);
    new BaseComponent('span').setContent('55').render(infostock);

    }
  }
}

export default MainPage;
