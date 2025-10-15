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
        quantity

      });
    }
  }

}

export let cart = new Cart("regularCart");