import React from "react";
import { AppButton, AppButtonLink } from "../../components/button/button";
import { VisibleToCollaborators } from "../../components/conditional-render/visible-to-collaborators";
import { FormLayout } from "../../components/form-layout/form-layout";
import { useFormFieldWithoutValidation } from "../../hooks/use-formfield";
import { useResourceId } from "../../hooks/use-resource-id";
import { ProductImage } from "../product-img/product-image";
import { QuantitySelector } from "./quantity-selector";
import { useAddToCart } from "./use-add-to-cart";
import { useDeleteProduct } from "./use-delete-product";
import { useShowProduct } from "./use-show-product";

export const ShowProductPage = () => {
  const productId = useResourceId();
  const showProduct = useShowProduct(productId);
  const form = useFormFieldWithoutValidation(0);
  const cart = useAddToCart(productId);
  const deleteProduct = useDeleteProduct(productId);

  return (
    <FormLayout>
      <VisibleToCollaborators>
        <AppButton onClick={deleteProduct}>Excluir produto</AppButton>
        <AppButtonLink to={`/edit-products/${productId}`}>
          Editar produto
        </AppButtonLink>
      </VisibleToCollaborators>

      <ProductImage imgId={showProduct.product.img_filename} />

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

      {cart.quantity !== 0 && (
        <div>
          Você já tem {cart.quantity} no carrinho, deseja adicionar {form.value}{" "}
          a mais ?
        </div>
      )}

      <AppButton
        onClick={() => cart.addToCart(showProduct.product, form.value)}
      >
        Adicionar ao carrinho
      </AppButton>
      <AppButtonLink to="/finish-order">Finalizar compra</AppButtonLink>
    </FormLayout>
  );
};
