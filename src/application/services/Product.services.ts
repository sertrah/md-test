import { productRepository } from "infraestructure/repositories/Product.repository";
import { SearchResult } from "application/models/SearchResult.model";

export const productService = {
  getProductsByName: (searchValue: string): Promise<SearchResult> => {
    return productRepository.getProductsByName(searchValue);
  },
  getProductById: (productId: string) => {
    return productRepository.getProductById(productId);
  },
};