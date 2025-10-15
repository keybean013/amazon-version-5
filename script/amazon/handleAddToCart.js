import { cart } from "../../data/cart.js";
import { elemEditor, elemSelector, multiElemSelector } from "../utils/domHelper.js";

export function handleAddToCart () {
  multiElemSelector(".js-add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {

      const productId = btn.dataset.productId;
      const dropDownElement = elemSelector(`
        .js-quantity-${productId}
      `);
      const quantity = dropDownElement.value;
      
      cart.addItem(productId, Number(quantity));
      elemEditor(".cart-quantity", cart.getQuantity());

    });
  });
}