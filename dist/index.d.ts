import './styles.scss';
import './pages/main/mainPage.scss';
import './core/components/footer/footer.scss';
import Header from './core/components/header';
import Page from './core/templates/page';
export default class App {
    private container;
    activePage?: Page;
    header: Header;
    constructor();
    handleRouteChange(): void;
    start(): void;
}
