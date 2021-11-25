import React from "react";
import { useNavigate } from "react-router";
import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { SelectInput } from "../../components/select/select";
import { Toast } from "../../components/toast/toast";
import { ShoppingCartRow } from "../../products/shopping-cart-row";
import { useFinishOrder } from "./use-finish-order";
import "./finish-order.css";

export const FinishOrderPage = () => {
  const nav = useNavigate();
  const finishOrder = useFinishOrder();
  const productRows = finishOrder.products.map((product) => {
    return <ShoppingCartRow product={product} key={product.id} />;
  });

  return (
    <FormLayout>
      <h1>Finalizar compra</h1>
      <div className="address-selector">
        {finishOrder.addresses.length !== 0 ? (
          <SelectInput
            value={finishOrder.selectedAddress}
            onChange={finishOrder.onChangeSelectedAddress}
            options={finishOrder.addresses}
            setValue={finishOrder.setSelectedOption}
          />
        ) : (
          <div>Nenhum endereço cadastrado</div>
        )}

        <AppButton
          onClick={() =>
            nav("/address", { state: { redirect: "/finish-order" } })
          }
        >
          Cadastrar Endereco
        </AppButton>
      </div>

      {productRows}

      <Toast
        state={finishOrder.toastState}
        msg={finishOrder.toastMsg}
        isVisible={finishOrder.isToastVisible}
        handleClose={finishOrder.handleToastClose}
      />

      <AppButton onClick={finishOrder.submit}>Finzalizar compra</AppButton>
    </FormLayout>
  );
};
