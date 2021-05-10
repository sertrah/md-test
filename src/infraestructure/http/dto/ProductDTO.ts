export interface SearchQueryDTO {
  site_id: string;
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: ProductDTO[];
  secondary_results?: ProductDTO[];
  related_results?: ProductDTO[];
  sort: { id: string; name: string };
  available_sorts: { id: string; name: string }[];
  filters: {
    id: string;
    name: string;
    type: string;
    values: { id: string; name: string; results: number }[];
  }[];
  available_filters: {
    id: string;
    name: string;
    type: string;
    values: { id: string; name: string; results: number }[];
  }[];
}

export interface ProductDTO {
  id: string;
  site_id: string;
  title: string;
  seller: any;
  price: number;
  prices: {
    id: string;
    prices: {
      id: string;
      type: string;
      conditions: any;
      amount: number;
      regular_amount: any;
      currency_id: string;
      exchange_rate_context: string;
      metadata: any;
      last_updated: string;
    }[];
    presentation: { display_currency: string };
    payment_method_prices: [];
    reference_prices: [];
    purchase_discounts: [];
  };
  sale_price: null;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  pictures: {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
  }[];
  secure_thumbnail?: string;
  accepts_mercadopago: boolean;
  shipping: {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
  };
  differential_pricing: { id: string };
  original_price: null | string;
  category_id: string;
  official_store_id: null | string;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
}

export interface ProductDescriptionDTO {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: {
    url: string;
    width: string;
    height: string;
    status: string;
  };
}
