import './styles.scss';
import './pages/main/mainPage.scss';
import './core/components/footer/footer.scss';
import Header from './core/components/header';
export default class App {
    private cart;
    private container;
    activePage?: string;
    header: Header;
    constructor();
    handleRouteChange(): HTMLElement | undefined;
    start(): void;
    popbg(): void;
}
export declare const app: App;
