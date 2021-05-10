import { http } from "infraestructure/http/http";
import {
  SearchQueryDTO,
  ProductDTO,
  ProductDescriptionDTO,
} from "infraestructure/http/dto/ProductDTO";
import { SearchResult, Product } from "application/models/SearchResult.model";

export const productRepository = {
  getProductsByName: async (searchValue: string): Promise<SearchResult> => {
    return await http
      .get<SearchQueryDTO>(`sites/MLA/search?q=${searchValue}`)
      .then((searchQueryDTO: SearchQueryDTO) => {
        return {
          author: {
            name: "Harlen",
            lastName: "Giraldo",
          },
          categories: searchQueryDTO.filters
            .find((filter) => filter.id === "category")
            ?.values.map((category) => category.name),
          items: searchQueryDTO.results.slice(0, 4).map((result) => ({
            id: result.id,
            title: result.title,
            price: {
              currency: result.currency_id,
              amount: result.price,
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
          })),
        };
      });
  },
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
        };
      }
    );
  },
};
