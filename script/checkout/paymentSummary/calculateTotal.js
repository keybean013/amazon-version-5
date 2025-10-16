import { products } from "../../../data/products.js";
import { cart } from "../../../data/cart.js";
import { deliveryOptions } from "../../../data/deliveryOptions.js";

export function calculateTotal () {
  let cartItemQty = 0;
  let cartTotalPrice = 0;
  let totalShippingPrice = 0;
  let totalBeforeTax = 0;
  let estimatedTax = 0;
  let totalOrderPrice = 0;

  cart.items.forEach((cartItem) => {
    const product = products.find((product) => 
      cartItem.productId === product.id
    );
    const deliveryOption = deliveryOptions.find((option) =>
      option.id === cartItem.deliveryOptionId
    );
    const itemQty = cartItem.quantity;

    cartItemQty += itemQty;
    cartTotalPrice += product.priceCents * itemQty;
    totalShippingPrice += deliveryOption.priceCents;

  });

  totalBeforeTax = cartTotalPrice + totalShippingPrice;
  estimatedTax = totalBeforeTax / 10;
  totalOrderPrice = totalBeforeTax + estimatedTax;

  return {
    cartItemQty,
    cartTotalPrice,
    totalShippingPrice,
    totalBeforeTax,
    estimatedTax,
    totalOrderPrice
  }
}