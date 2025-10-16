import { cart } from "../data/cart.js";
import { loadProduct } from "../data/products.js";
import { pageLoader } from "../script/utils/pageLoader.js";
import { renderOrderSummary } from "./checkout/renderSummary/renderOrderSummary.js";
import { elemEditor } from "./utils/domHelper.js";

pageLoader(loadProduct, () => {
  renderOrderSummary();
});