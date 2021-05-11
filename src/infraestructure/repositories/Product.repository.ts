import { http } from "infraestructure/http/http";
import {
  ProductDTO,
  ProductDescriptionDTO,
} from "infraestructure/http/dto/ProductDTO";
import { Product } from "application/models/Product.model";

export const productRepository = {
  getProductById: async (id: string): Promise<Product> => {
    return await Promise.all([
      http.get<ProductDTO>(`items/${id}`),
      http.get<ProductDescriptionDTO>(`items/${id}/description`),
    ]).then(
      ([productDTO, productDescriptionDTO]: [
        ProductDTO,
        ProductDescriptionDTO
      ]) => {
        return {
          author: {
            name: "Harlen",
            lastName: "Giraldo",
          },
          id: productDTO.id,
          title: productDTO.title,
          price: {
            currency: productDTO.currency_id,
            amount: productDTO.price,
          },
          picture: productDTO.secure_thumbnail ?? productDTO.thumbnail,
          condition: productDTO.condition,
          free_shipping: true,
          sold_quantity: productDTO.sold_quantity,
          description: productDescriptionDTO.plain_text,
          categoryId: productDTO.category_id,
        };
      }
    );
  },
};
