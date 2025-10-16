import { cart } from "../../../data/cart.js";
import { deliveryOptions } from "../../../data/deliveryOptions.js";
import { products } from "../../../data/products.js";
import { elemEditor } from "../../utils/domHelper.js";
import { renderPaymentSummary } from "../paymentSummary/renderPaymentSummary.js";
import { handleDelete } from "./handleDelete.js";
import { handleRadioBtn } from "./handleRadioBtn.js";
import { handleUpdate } from "./handleUpdate.js";
import { renderDeliveryOptions } from "./renderDeliveryOption.js";

export function renderOrderSummary () {
  let orderSummaryHTML = "";
  
  cart.items.forEach((cartItem) => {

    const cartItemId = cartItem.productId;
    const ItemQty = cartItem.quantity;
    const cartDoId = cartItem.deliveryOptionId;
    const product = products.find((product) => 
      cartItemId === product.id
    );
    const delivery = deliveryOptions.find((option) => 
      cartItem.deliveryOptionId === option.id);
    const productName = product.name;
    const productPrice = product.getPrice();
    const productImage = product.image;

    orderSummaryHTML += `
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: ${delivery.getDeliveryDate()}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src=${productImage}>

          <div class="cart-item-details">
            <div class="product-name">
              ${productName}
            </div>
            <div class="product-price">
              $${productPrice}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label js-quantity-label-${cartItemId}">${ItemQty}</span>
                <input type="number" class="input-quantity js-input-quantity-${cartItemId}" min="1" max="10">
              </span>
              <span class="update-quantity-link link-primary js-update-link" data-cart-item-id="${cartItemId}">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-cart-item-id="${cartItemId}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            
            ${renderDeliveryOptions(cartItemId, cartDoId)}

          </div>
        </div>
      </div>
    `;
  });

  const cartQty = cart.getQuantity();
  elemEditor(".js-cart-quantity",

    cartQty <= 1
    ? `${cartQty} - item`
    : `${cartQty} - items`
    
  );

  elemEditor(".js-order-summary", orderSummaryHTML);
  renderPaymentSummary();
  handleDelete();
  handleUpdate();
  handleRadioBtn();
}