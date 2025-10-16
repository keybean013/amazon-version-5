import { multiElemSelector } from "../../utils/domHelper.js";
import { cart } from "../../../data/cart.js";
import { renderOrderSummary } from "./renderOrderSummary.js";

export function handleRadioBtn () {
  multiElemSelector(".js-delivery-option").forEach((radioBtn) => {
    radioBtn.addEventListener("click", () => {

      const { cartItemId, deliveryOptionId } = radioBtn.dataset;

      cart.updateDeliveryOptionId(cartItemId, Number(deliveryOptionId));
      renderOrderSummary();
    });
  });
}