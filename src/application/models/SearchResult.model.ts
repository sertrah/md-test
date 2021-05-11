export type SearchResult = {
  author: {
    name: string;
    lastName: string;
  };
  categories?: string[];
  items: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }[];
  mostPopularCategories: any;
};
