import { store } from "../storage/storage";

const key = "shopping-cart";

const getShopppingCart = async () => {
  const shoppingCart = await store.getItem(key);

  if (shoppingCart == null) {
    await store.setItem(key, []);
    return [];
  }

  return shoppingCart;
};

const getProductFromCart = async (id, cart = null) => {
  const productId = Number.parseInt(id);
  const shoppingCart = cart != null ? cart : await getShopppingCart();
  console.log(shoppingCart);

  const product = shoppingCart.find((entry) => entry.id === productId);
  console.log(shoppingCart.find((entry) => entry.id === productId));
  console.log(productId, product);

  return product;
};

const addProduct = async (product, quantity) => {
  const shoppingCart = await getShopppingCart();
  const savedProduct = await getProductFromCart(product.id, shoppingCart);
  console.log(savedProduct);

  if (savedProduct) {
    savedProduct.quantity += quantity;
  } else {
    shoppingCart.push({ ...product, quantity });
  }

  await store.setItem(key, shoppingCart);
};

const clearCart = async () => {
  await store.setItem(key, []);
};

const removeProduct = async (productId) => {
  const shoppingCartBefore = await getShopppingCart();
  const shoppingCartAfter = shoppingCartBefore.filter(
    (product) => product.id !== productId
  );

  await store.setItem(key, shoppingCartAfter);
};

export const ShoppingCart = {
  getShopppingCart,
  addProduct,
  clearCart,
  removeProduct,
  getProductFromCart,
};
