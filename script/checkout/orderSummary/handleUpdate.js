import { elemSelector, multiElemSelector } from "../../utils/domHelper.js";
import { cart } from "../../../data/cart.js";
import { renderOrderSummary } from "./renderOrderSummary.js";

export function handleUpdate () {
  multiElemSelector(".js-update-link").forEach((link) => {
    let isHidden;
    link.addEventListener("click", () => {

      const cartItemId = link.dataset.cartItemId;
      const inputElement = elemSelector(`.js-input-quantity-${cartItemId}`);
      const labelElement = elemSelector(`.js-quantity-label-${cartItemId}`);
      const quantity = inputElement.value;
      const cartItem = cart.items.find((cartItem) => cartItemId === cartItem.productId);
      
      if (!isHidden) {
        inputElement.style.display = "inline-block";
        inputElement.value = cartItem.quantity;
        labelElement.style.display = "none";
        isHidden = true;
      } else {
        cart.updateQty(cartItemId, Number(quantity));
        renderOrderSummary();
        isHidden = false;
      }

    });
  });
}