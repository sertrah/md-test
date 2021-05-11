import { productRepository } from "infraestructure/repositories/Product.repository";

export const productService = {
  getProductById: (productId: string) => {
    return productRepository.getProductById(productId);
  },
};