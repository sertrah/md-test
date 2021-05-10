import React, { FunctionComponent } from "react"; // importing FunctionComponent
import cn from "classnames";

const Card: FunctionComponent<any> = ({product, handleClik}) => {
  return (
    // Im using tabIndex cuz we dont have any visible link where the user could navigate to
    <article className="card" aria-label="description....." tabIndex={1} onClick={handleClik}>
      <div className="card_thumbnail">
        <img
          src={product.picture}
          alt="Control"
        />
      </div>
      <h2 className={cn("card_caption", product.free_shipping && "card_caption-free")}>{`${product.price.currency} ${product.price.amount}`}</h2>
      <p className="card_description">
        {product.title} Igual A {product.condition} <br/>
        completo Unico!
      </p>
      <span className="card_location">Capital Federal</span>
    </article>
  );
};

export default Card;
