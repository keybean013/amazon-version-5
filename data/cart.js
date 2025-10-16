import { saveToStorage, loadFromStorage } from "../script/utils/localStorage.js";


class Cart {
  items;
  #localStorageKey;

  constructor (localStorageKey) {

    this.#localStorageKey = localStorageKey;
    this.items = loadFromStorage(this.#localStorageKey) || [];

  }

  addItem (productId, quantity) {

    const cartItem = this.items.find((cartItem) => productId === cartItem.productId);

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {

      this.items.push({

        productId,
        quantity,
        deliveryOptionId: 1

      });
    }

    saveToStorage(this.#localStorageKey, this.items);
  }

  getQuantity () {

    let quantity = 0;

    this.items.forEach((cartItem) => {
      quantity += cartItem.quantity;
    });

    return quantity;
  }

  deleteItem (productId) {
    const newCart = [];

    this.items.forEach((cartItem) => {

      if (productId !== cartItem.productId) {
        newCart.push(cartItem);
      }

    });

    this.items = newCart;
    saveToStorage(this.#localStorageKey, this.items);
  }

  updateQty (productId, quantity) {
    const cartItem = this.items.find((cartItem) => 
      productId === cartItem.productId
    );

    cartItem.quantity = quantity;
    saveToStorage(this.#localStorageKey, this.items);
  }

  updateDeliveryOptionId (productId, deliveryOptionId) {
    const cartItem = this.items.find((cartItem) =>
      productId === cartItem.productId
    );

    cartItem.deliveryOptionId = deliveryOptionId;
    saveToStorage(this.#localStorageKey, this.items);
  }

  clearCart () {
    this.items = [];
    saveToStorage(this.#localStorageKey, this.items);
  }

}

export let cart = new Cart("regularCart");