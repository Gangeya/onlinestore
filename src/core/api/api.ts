import { IProducts, MyWindow } from '../../core/types';
import { TProduct } from '../../core/types';

class Api {
  private static instance: Api;

  private url = 'https://dummyjson.com/';

  constructor() {
    if (Api.instance) {
      return Api.instance;
    }
    Api.instance = this;
  }

  async getProducts() {
    const response = await fetch(`${this.url}products?limit=100`, {
      method: 'GET',
    });
    return response.json();
  }

  async getProduct(id: number) {
    const response = await fetch(`${this.url}products/${id}`, {
      method: 'GET',
    });
    return response.json();
  }
}
export default Api;
