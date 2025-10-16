import { loadProduct, products } from "../data/products.js";
import { pageLoader } from "../script/utils/pageLoader.js";
import { renderOrderSummary } from "./checkout/renderOrderSummary.js";


pageLoader(loadProduct, () => {

  console.log(products);
  
  renderOrderSummary();
});