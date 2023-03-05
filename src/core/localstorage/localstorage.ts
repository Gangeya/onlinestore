function setProductsInLS(arr: string[]): void {
  localStorage.setItem('products', JSON.stringify(arr));
}
function setStocksInLS(arr: number[]): void {
  localStorage.setItem('stocks', JSON.stringify(arr));
}
function setCountInLS(number: number): void {
  localStorage.setItem('count', String(number));
}
function setTotalPriceInLS(number: number): void {
  localStorage.setItem('totalprice', String(number));
}
function getProductsFromLS() {
  const products = localStorage.getItem('products');
  if (products) return JSON.parse(products) as string[];
}
function getStocksFromLS() {
  const stocks = localStorage.getItem('stocks');
  if (stocks) return JSON.parse(stocks) as number[];
}
function getTotalPriceFromLS() {
  const totalprice = localStorage.getItem('totalprice');
  if (totalprice) return Number(totalprice);
}
function getCountFromLS() {
  const count = localStorage.getItem('count');
  if (count) return Number(count);
}
export {
  setProductsInLS,
  setStocksInLS,
  getProductsFromLS,
  getStocksFromLS,
  setCountInLS,
  setTotalPriceInLS,
  getTotalPriceFromLS,
  getCountFromLS,
};
