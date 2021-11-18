import React from "react";
import { Pagination } from "../../components/pagination/pagination";
import { SearchBar } from "../../components/search-bar/search-bar";
import { ProductCard } from "./product-card";
import { useProductsIndex } from "./use-products-index";
import "./index-products.css";

export const ProductsIndexPage = () => {
  const productsIndex = useProductsIndex();

  return (
    <div className="index-grid">
      <SearchBar
        searchParam={productsIndex.searchParam}
        onChange={productsIndex.onChangeSearchParam}
        clear={productsIndex.clearSearch}
        submit={productsIndex.searchProductsByName}
      />
      <div className="products-grid">
        {productsIndex.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination
        currentPage={productsIndex.currentPage}
        numOfPages={productsIndex.numberOfPages}
        onClickPageButton={productsIndex.changePage}
      />
    </div>
  );
};
