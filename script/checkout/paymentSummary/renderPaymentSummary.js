import { elemEditor } from "../../utils/domHelper.js";
import { calculateTotal } from "./calculateTotal.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export function renderPaymentSummary () {

  const {
    cartItemQty,
    cartTotalPrice,
    totalShippingPrice,
    totalBeforeTax,
    estimatedTax,
    totalOrderPrice
  } = calculateTotal();

  const paymentSummary = `
    <div class="payment-summary-title">
      Payment summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartItemQty}):</div>
      <div class="payment-summary-money">$${formatCurrency(cartTotalPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(totalShippingPrice)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalOrderPrice)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  elemEditor(".js-payment-summary", paymentSummary);
}