export type Product = {
  author: {
    name: string;
    lastName: string;
  };
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  categoryId: string;
};