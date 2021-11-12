import { useEffect, useState } from "react";
import axios from "axios";
import { useFormField } from "../hooks/use-formfield";
import { buildUrl } from "../helpers/build-url";

const buildProductsUrl = (page, productName) => {
  const url = buildUrl(`products?page=${page}`);

  if (productName != null) {
    return url + `&nome=${productName}`;
  }

  return url;
};

const fetchProducts = async (productName = "", page = 1) => {
  const result = await axios.get(buildProductsUrl(page, productName));
  const { products, count } = result.data;

  return { products, count };
};

export const useProductsIndex = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchParamInUse, setSearchParamInUse] = useState("");
  const { onChange: onChangeSearchParam, value: searchParam } = useFormField(
    () => [],
    ""
  );

  const handleApiResult = ({ products, count }) => {
    const newNumOfPages = Math.ceil(count / 10);
    setNumberOfPages(newNumOfPages);
    setProducts(products);
  };

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const result = await fetchProducts();
      handleApiResult(result);
      setCurrentPage(1);
    };

    fetchAndSetProducts();
  }, []);

  const searchProductsByName = async () => {
    const result = await fetchProducts(searchParam);
    handleApiResult(result);
    setCurrentPage(1);
    setSearchParamInUse(searchParam);
  };

  const changePage = async (page) => {
    const result = await fetchProducts(searchParamInUse, page);
    handleApiResult(result);
    setCurrentPage(page);
  };

  const clearSearch = async () => {
    const result = await fetchProducts();
    handleApiResult(result);
    setCurrentPage(1);
    setSearchParamInUse("");
  };

  return {
    products,
    currentPage,
    numberOfPages,
    setCurrentPage,
    searchParam,
    onChangeSearchParam,
    searchProductsByName,
    changePage,
    clearSearch,
  };
};
