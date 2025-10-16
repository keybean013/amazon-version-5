class Cart {
  items;
  #localStorageKey;

  constructor (localStorageKey) {

    this.#localStorageKey = localStorageKey;
    this.items = this.loadFromStorage() || [];

  }

  saveToStorage () {

    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.items));

  }

  loadFromStorage () {

    return JSON.parse(localStorage.getItem(this.#localStorageKey));

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

    this.saveToStorage();
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
    this.saveToStorage();
  }

  updateQty (productId, quantity) {
    const cartItem = this.items.find((cartItem) => 
      productId === cartItem.productId
    );

    cartItem.quantity = quantity;
    this.saveToStorage();
  }

  updateDeliveryOptionId (productId, deliveryOptionId) {
    const cartItem = this.items.find((cartItem) =>
      productId === cartItem.productId
    );

    cartItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }

}

export let cart = new Cart("regularCart");