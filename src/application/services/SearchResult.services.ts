import { searchResultRepository } from "infraestructure/repositories/SearchResult.repository";
import { SearchResult } from "application/models/SearchResult.model";

export const searchResultService = {
  getSearchResultByName: (searchValue: string): Promise<SearchResult> => {
    return searchResultRepository.getSearchResultByName(searchValue);
  },
};