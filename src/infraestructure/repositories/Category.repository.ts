import { http } from "infraestructure/http/http";
import {
  CategoryDTO,
} from "infraestructure/http/dto/CategoryDTO";
import { Category } from "application/models/Category.model";

export const categoryRepository = {
  getCategoriesById: async (id: string): Promise<Category> => {
    return await http.get<CategoryDTO>(`categories/${id}`).then((categoryDTO: CategoryDTO) => {
      return {
        id: categoryDTO.id,
        name: categoryDTO.name,
        items: categoryDTO.path_from_root,
      };
    });
  },
};
