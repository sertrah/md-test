import React, { FC, MouseEvent } from "react";
import { Card } from "presentation-layer/components";
import { useQuery } from "react-query";
import { productService } from "application/services/Product.services";
import useQueryPath from "application/hooks/useQueryPath";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH_LIST } from "application/constants";
import { Helmet } from "react-helmet-async";
import { ReactComponent as Loupe } from "presentation-layer/assets/loupeX.svg";
import { isEmpty } from "lodash";
import { SearchResult } from "application/models/SearchResult.model";

const ResultView: FC<{ searchResult: SearchResult, searchParam: string }> = ({ searchResult, searchParam }) => {
  const history = useHistory();
  const handleUserClick = (productId: string) => (
    event: MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    history.push(`${ROUTER_PATH_LIST.detailProduct(productId)}`);
  };

  return (
    <>
      <Helmet>
        <title>{searchParam} </title>
        <meta name="description" content={searchResult?.categories?.join()} />
      </Helmet>
      {searchResult.items.length > 0 ? (
        searchResult.items.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleClik={handleUserClick(product.id)}
          />
        ))
      ) : (
        <section>
          <Loupe />
          <h1>ups nada nidta</h1>
        </section>
      )}
    </>
  );
};

const getGreetings = (): string => {
  var ndate = new Date();
  var hr = ndate.getHours();
  if (hr < 12) {
    return "Buenos Dias";
  }
  if (hr >= 12 && hr <= 17) {
    return "Buenas Tardes";
  }
  return "Buenas Noches";
};

export default function ProductList() {
  const [queryString] = useQueryPath();

  const { data: searchResult } = useQuery(
    `search-${queryString.search}`,
    () => productService.getProductsByName(queryString.search),
    {
      retry: 1,
      retryDelay: 3000,
      onError: ({ message }) => {
        console.error(message);
      },
      enabled: !isEmpty(queryString.search),
    }
  );

  return (
    <>
      <Helmet>
        <title>{queryString?.search ?? "Bienvenido"} </title>
        <meta
          name="description"
          content="Los 3 B de internet. Bueno, Bonito, Barato"
        />
      </Helmet>
      {queryString?.search && searchResult ? (
        <section className="search_result">
          <ResultView searchResult={searchResult} searchParam={queryString.search} />
        </section>
      ) : (
        <section>
          <h1>Primero que nada. {getGreetings()}</h1>
          <p>Busca el producto que deseas</p>
        </section>
      )}
    </>
  );
}
