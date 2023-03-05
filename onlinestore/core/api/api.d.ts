declare class Api {
    private static instance;
    private url;
    constructor();
    getProducts(): Promise<any>;
    getProduct(id: number): Promise<any>;
}
export default Api;
