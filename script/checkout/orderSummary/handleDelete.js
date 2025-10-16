import { multiElemSelector } from "../../utils/domHelper.js";
import { cart } from "../../../data/cart.js";
import { renderOrderSummary } from "./renderOrderSummary.js";

export function handleDelete () {

  multiElemSelector(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {

      const cartItemId = link.dataset.cartItemId;
      
      cart.deleteItem(cartItemId);
      renderOrderSummary();
    });
  });
}