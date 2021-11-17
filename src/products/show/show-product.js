import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AppButton } from "../../components/button/button";
import { VisibleToCollaborators } from "../../components/conditional-render/visible-to-collaborators";
import { useFormFieldWithoutValidation } from "../../hooks/use-formfield";
import { QuantitySelector } from "./quantity-selector";
import { useAddToCart } from "./use-add-to-cart";
import { useShowProduct } from "./use-show-product";

export const ShowProductPage = () => {
  const { id: productId } = useParams();
  const showProduct = useShowProduct(productId);
  const form = useFormFieldWithoutValidation(0);
  const kekw = useAddToCart(productId);

  return (
    <div>
      <VisibleToCollaborators>
        <AppButton>Excluir produto</AppButton>
        <AppButton>Editar produto</AppButton>
      </VisibleToCollaborators>

      <div>{showProduct.product.nome}</div>
      <div>{showProduct.product.preco}</div>
      {showProduct.product.estoque !== 0 ? (
        <div>Produto disponivel</div>
      ) : (
        <div>Sem estoque</div>
      )}
      <QuantitySelector
        max={showProduct.product.estoque}
        quantity={form.value}
        setQuantity={form.setValue}
        onChange={form.onChange}
      />
      {kekw.quantity !== 0 ? (
        <div>
          Vc ja tem {kekw.quantity} no carrinho, deseja adicionar {form.value} a
          mais ?{" "}
        </div>
      ) : (
        <div>{kekw.quantity}</div>
      )}

      <button onClick={() => kekw.addToCart(showProduct.product, form.value)}>
        Adicionar ao carrinho
      </button>
      <Link to="/finish-order">Finazliar compra</Link>
    </div>
  );
};
