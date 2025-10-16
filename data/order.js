import { saveToStorage, loadFromStorage } from "../script/utils/localStorage.js";
import { cart } from "./cart.js";

class Order {
  orders;
  #localStorageKey;

  constructor (localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.orders = loadFromStorage(this.#localStorageKey) || [];
  }

  addOrder (cartItem) {
    
    if (!cart.items) {
      alert("You have no item in your cart");
    } else {
      this.orders.push(cartItem);
      cart.clearCart();
    }
    console.log(this.orders);
    
    saveToStorage(this.#localStorageKey, this.orders);
  }
}

export const order = new Order ("order");