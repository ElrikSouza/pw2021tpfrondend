import React from "react";
import { useNavigate } from "react-router";
import { AppButton } from "../../components/button/button";
import { SelectInput } from "../../components/select/select";
import { Toast } from "../../components/toast/toast";
import { ShoppingCartRow } from "../../products/shopping-cart-row";
import { useFinishOrder } from "./use-finish-order";

export const FinishOrderPage = () => {
  const nav = useNavigate();
  const finishOrder = useFinishOrder();
  const productRows = finishOrder.products.map((product) => {
    return <ShoppingCartRow product={product} key={product.id} />;
  });
  return (
    <div>
      <h1>Finalizar compra</h1>
      {finishOrder.addresses.length !== 0 ? (
        <SelectInput
          value={finishOrder.selectedAddress}
          onChange={finishOrder.onChangeSelectedAddress}
          options={finishOrder.addresses}
          setValue={finishOrder.setSelectedOption}
        />
      ) : (
        <div>Nenhum endereco cadastrado</div>
      )}
      {productRows}
      <button
        onClick={() =>
          nav("/address", { state: { redirect: "/finish-order" } })
        }
      >
        Cadastrar Endereco
      </button>
      <Toast
        state={finishOrder.toastState}
        msg={finishOrder.toastMsg}
        isVisible={finishOrder.isToastVisible}
        handleClose={finishOrder.handleToastClose}
      />
      <AppButton onClick={finishOrder.submit}>Finzalizar compra</AppButton>
    </div>
  );
};
