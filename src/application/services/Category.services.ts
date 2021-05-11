import { categoryRepository } from "infraestructure/repositories/Category.repository";

export const categoryService = {
  getCategoriesById: (categoryId: string) => {
    return categoryRepository.getCategoriesById(categoryId);
  },
};