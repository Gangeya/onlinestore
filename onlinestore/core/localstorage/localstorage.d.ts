declare function setProductsInLS(arr: string[]): void;
declare function setStocksInLS(arr: number[]): void;
declare function setCountInLS(number: number): void;
declare function setTotalPriceInLS(number: number): void;
declare function getProductsFromLS(): string[] | undefined;
declare function getStocksFromLS(): number[] | undefined;
declare function getTotalPriceFromLS(): number | undefined;
declare function getCountFromLS(): number | undefined;
export { setProductsInLS, setStocksInLS, getProductsFromLS, getStocksFromLS, setCountInLS, setTotalPriceInLS, getTotalPriceFromLS, getCountFromLS, };
