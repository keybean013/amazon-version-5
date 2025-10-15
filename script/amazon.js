import { loadProduct } from "../data/products.js";
import { renderProducts } from "./amazon/renderProducts.js";
import { pageLoader } from "./utils/pageLoader.js";

pageLoader(() => {
  loadProduct().then(() => {
    renderProducts();
  });
  
});
