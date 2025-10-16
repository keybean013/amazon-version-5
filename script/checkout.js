import { loadProduct } from "../data/products.js";
import { pageLoader } from "../script/utils/pageLoader.js";
import { renderOrderSummary } from "./checkout/orderSummary/renderOrderSummary.js";

pageLoader(loadProduct, () => {
  renderOrderSummary();
});