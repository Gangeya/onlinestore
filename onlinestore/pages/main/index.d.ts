import BaseComponent from '../../core/templates/component';
import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';
declare class MainPage extends BaseComponent {
    constructor(title: string, content: string);
    getData(): Promise<IProducts>;
    filterProduct(): Promise<void>;
    setCountProducts(data: TProduct[], typefilter: string): void;
    renderContent(container: HTMLElement): Promise<void>;
    renderProducts(container: HTMLElement, data: TProduct[]): void;
    renderFilter(name: string): void;
}
export default MainPage;
