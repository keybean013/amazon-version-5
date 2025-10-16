import { deliveryOptions } from "../../../data/deliveryOptions.js";

export function renderDeliveryOptions (cartItemId, cartDoId) {
  let optionHTML = "";

  deliveryOptions.forEach((option) => {
    const deliveryDate = option.getDeliveryDate();
    const optionId = option.id;
    const price = option.getPrice() < 1
      ? "FREE"
      : `$${option.getPrice()}`;
    const isChecked = optionId === cartDoId
      ? "checked"
      : ""

    optionHTML += `
      <div class="delivery-option js-delivery-option" data-cart-item-id="${cartItemId}" data-delivery-option-id="${optionId}">
        <input type="radio" ${isChecked}
          class="delivery-option-input"
          name="delivery-option-${cartItemId}">
        <div>
          <div class="delivery-option-date">
            ${deliveryDate}
          </div>
          <div class="delivery-option-price">
            ${price} - Shipping
          </div>
        </div>
      </div>
    `;
  });

  return optionHTML;
}