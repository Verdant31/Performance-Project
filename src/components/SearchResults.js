import {ProductItem}  from "./ProductItem";
import { useMemo } from 'react';

export default function SearchResults(props) {
  const totalPrice = useMemo(() => {
    return props.results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [props.results]);

  return (
    <div>
      <h3>${totalPrice}</h3>
      {props.results.map((product) => {
        return (
          <ProductItem addToWishList={props.addToWishList} key={product.name}  product={product} />
        );
      })}
    </div>
  )
}
