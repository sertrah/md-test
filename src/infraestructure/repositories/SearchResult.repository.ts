import { http } from "infraestructure/http/http";
import { SearchQueryDTO } from "infraestructure/http/dto/ProductDTO";
import { SearchResult } from "application/models/SearchResult.model";
import { countBy, map } from "lodash";

export const searchResultRepository = {
  getSearchResultByName: async (searchValue: string): Promise<SearchResult> => {
    return await http
      .get<SearchQueryDTO>(`sites/MLA/search?q=${searchValue}`)
      .then((searchQueryDTO: SearchQueryDTO) => {
        const cutResultItems = searchQueryDTO.results.slice(0, 4);
        return {
          author: {
            name: "Harlen",
            lastName: "Giraldo",
          },
          categories: searchQueryDTO.filters
            .find((filter) => filter.id === "category")
            ?.values.map((category) => category.name),
          items: cutResultItems.map((result) => ({
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
          mostPopularCategories: map(
            countBy(searchQueryDTO.results, (item) => item.category_id),
            (val, key) => ({ categoryId: key, total: val })
          ),
        };
      });
  },
};
