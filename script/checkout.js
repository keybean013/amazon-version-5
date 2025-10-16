import { loadProduct } from "../data/products.js";
import { pageLoader } from "../script/utils/pageLoader.js";
import { renderOrderSummary } from "./checkout/orderSummary/renderOrderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary/renderPaymentSummary.js";

pageLoader(loadProduct, () => {
  renderOrderSummary();
  renderPaymentSummary();
});