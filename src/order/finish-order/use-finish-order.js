import { useGetAddresses } from "../../address/use-get-addresses";
import { TOAST_STATES } from "../../components/toast/toast";
import { useToast } from "../../components/toast/use-toast";
import { useFormFieldWithoutValidation } from "../../hooks/use-formfield";
import { useLoginBeforeContinuing } from "../../hooks/use-login-before-continuing";
import { useCartProducts } from "../../shopping-cart/use-cart-products";
import { callCreateOrder } from "../order-api";

export const useFinishOrder = () => {
  const isAuthenticated = useLoginBeforeContinuing();
  const { products } = useCartProducts();
  const { addresses } = useGetAddresses(isAuthenticated);
  const {
    value: selectedAddress,
    onChange: onChangeSelectedAddress,
    setValue: setSelectedOption,
  } = useFormFieldWithoutValidation();

  const { openToast, ...toast } = useToast();

  const submit = async () => {
    try {
      const mappedProducts = products.map((product) => ({
        id: product.id,
        quantidade: product.quantity,
      }));

      await callCreateOrder(mappedProducts, Number.parseInt(selectedAddress));
      openToast("Compra finzalizada com sucesso!", TOAST_STATES.INFO);
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...toast,
    openToast,
    products,
    addresses,
    selectedAddress,
    onChangeSelectedAddress,
    setSelectedOption,
    submit,
  };
};
