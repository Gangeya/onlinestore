import BaseComponent from '../../core/templates/component';
import 'nouislider/dist/nouislider.css';
import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';
declare class MainPage extends BaseComponent {
    constructor(title: string, content: string);
    getData(): Promise<IProducts>;
    renderContent(container: HTMLElement): Promise<void>;
    filterProduct(start?: number | string, end?: number | string, type?: string): Promise<void>;
    setCountProducts(data: TProduct[], typefilter: string): void;
    renderRange(data: TProduct[], type: string): void;
    renderProducts(container: HTMLElement, data: TProduct[]): void;
    renderFilter(name: string): void;
    resetFilters(): void;
}
export default MainPage;
