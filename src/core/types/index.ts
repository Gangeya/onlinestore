export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
};

export interface IProducts {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface MyWindow extends Window {
  data: IProducts;
}

export type ProductWitchStock = [number, TProduct][];

export type CartItems = ProductWitchStock[];
