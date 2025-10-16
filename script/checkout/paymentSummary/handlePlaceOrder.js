import { elemSelector } from "../../utils/domHelper.js";
import { cart } from "../../../data/cart.js";
import { order } from "../../../data/order.js";
import { renderOrderSummary } from "../orderSummary/renderOrderSummary.js";

export function handlePlaceOrder () {
  elemSelector(".js-place-order-btn").addEventListener("click", () => {
    order.addOrder(cart.items);
    renderOrderSummary();
    alert("You place your order successfully");
  });

}

