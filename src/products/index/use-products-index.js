import { useEffect, useState } from "react";
import { useFormField } from "../../hooks/use-formfield";
import { callGetProducts } from "../products-api";

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
      const result = await callGetProducts();
      handleApiResult(result);
      setCurrentPage(1);
    };

    fetchAndSetProducts();
  }, []);

  const searchProductsByName = async () => {
    const result = await callGetProducts(searchParam);
    handleApiResult(result);
    setCurrentPage(1);
    setSearchParamInUse(searchParam);
  };

  const changePage = async (page) => {
    const result = await callGetProducts(searchParamInUse, page);
    handleApiResult(result);
    setCurrentPage(page);
  };

  const clearSearch = async () => {
    const result = await callGetProducts();
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
