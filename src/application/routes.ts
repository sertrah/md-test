import ProductList from "presentation-layer/product/productList";
import DetailProduct from "presentation-layer/product/detailProduct";

import { ROUTER_PATH_LIST } from "./constants";

const routes = [
  {
    path: ROUTER_PATH_LIST.default,
    component: ProductList,
  },
  {
    path: ROUTER_PATH_LIST.searchResult,
    component: ProductList,
  },
  {
    path: ROUTER_PATH_LIST.detailProduct(":id"),
    component: DetailProduct,
  }
];

export default routes;