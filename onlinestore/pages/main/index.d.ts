import BaseComponent from '../../core/templates/component';
import 'nouislider/dist/nouislider.css';
import { IProducts } from '../../core/types';
import { TProduct } from '../../core/types';
declare class MainPage extends BaseComponent {
    private static instance;
    private api;
    private cart;
    constructor();
    focus(): void;
    blur(): void;
    searchProduct(): void;
    getData(): Promise<IProducts>;
    renderContent(container: HTMLElement): Promise<void>;
    sortProduct(data: TProduct[], typeSort: string): TProduct[];
    filterProduct(start?: number | string, end?: number | string, type?: string): Promise<void>;
    setCountProducts(data: TProduct[], typefilter: string): void;
    renderRange(data: TProduct[], type: string): void;
    renderProducts(container: HTMLElement, data: TProduct[]): void;
    tocart(e: Event, product: TProduct, price: number): void;
    productlink(prod: TProduct): () => void;
    renderFilter(name: string): void;
    resetFilters(): void;
    view(v: HTMLElement): void;
    setBreadcrumbs(): void;
    copylink(): void;
    checkActive(): void;
}
export default MainPage;
