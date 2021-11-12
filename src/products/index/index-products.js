import React from "react";
import { Pagination } from "../../components/pagination/pagination";
import { SearchBar } from "../../components/search-bar/search-bar";
import { ProductCard } from "../product-card";
import { useProductsIndex } from "./use-products-index";

export const ProductsIndexPage = () => {
  const productsIndex = useProductsIndex();

  return (
    <div>
      <SearchBar
        searchParam={productsIndex.searchParam}
        onChange={productsIndex.onChangeSearchParam}
        clear={productsIndex.clearSearch}
        submit={productsIndex.searchProductsByName}
      />
      {productsIndex.products.map((product) => (
        <ProductCard product={product} />
      ))}
      <Pagination
        currentPage={productsIndex.currentPage}
        numOfPages={productsIndex.numberOfPages}
        onClickPageButton={productsIndex.changePage}
      />
    </div>
  );
};
