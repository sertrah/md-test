import React, {useContext} from "react";
import { Button } from "presentation-layer/components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { productService } from "application/services/Product.services";
import { Helmet } from "react-helmet-async";
import { Product } from "application/models/Product.model";
import { ReferenceCategoryContext } from "application/contexts/CategoryContext"

// https://developers.google.com/search/docs/data-types/product#json-ld_2

const structuredDataSingle = (product: Product) => {
  let data = {
    "@context": "http://schema.org/",
    "@type": "Product",
    name: `${product.title}`,
    image: product.picture,
    description: product.description,
    url: window.location.href,
    author: {
      "@type": "Person",
      name: `${product.author.name} ${product.author.lastName}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: `${product.price.currency}`,
      price: `${product.price.currency}`,
      availability: `${product.sold_quantity}`,
      seller: {
        "@type": "Organization",
        name: "Jhon smith",
      },
    },
  };

  return JSON.stringify(data);
};

export default function DetailProduct() {
  const { id } = useParams<{ id: string }>();
  const { setCategoryId } = useContext(ReferenceCategoryContext);

  const { data: product, isLoading } = useQuery(
    ["comic", id],
    ({ queryKey: [, id] }) => productService.getProductById(id),
    {
      retry: 1,
      retryDelay: 3000,
      onSuccess: ({categoryId}) => {
        setCategoryId(categoryId);
      }
    }
  );

  return (
    <>
      {product ? (
        <section className="product-detail" typeof="schema:Product">
          <Helmet>
            <title>{product.title}</title>
            <meta
              name="description"
              content={product.description.slice(0, 160)}
            />
            <meta
              name="og:description"
              content={product.description.slice(0, 160)}
            />
            <meta name="og:title" content={product.title} />
            <meta property="og:url" content={window.location.href} />
            <script className="structured-data-list" type="application/ld+json">
              {structuredDataSingle(product)}
            </script>
          </Helmet>
          <div className="product-detail__content">
            <img
              className="product-detail__content-img"
              src={product.picture}
              alt=""
            />
            <h2 className="product-detail__content-title ">
              Descripcion del producto
            </h2>
            <p className="product-detail__content-description">
              {product.description}
            </p>
          </div>
          <section className="product-detail__buy">
            <span className="product-detail__buy-counter" property="quantity">
              Nuevo - {product.sold_quantity} vendidos
            </span>
            <h3 className="product-detail__buy-caption">{product.title}</h3>
            <h1 className="product-detail__buy-price">
              {product.price.currency} {product.price.amount}
            </h1>
            <Button className="secundary full">Comprar</Button>
          </section>
        </section>
      ) : isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <h1>No hay busquedas que coinciden</h1>
      )}
    </>
  );
}
