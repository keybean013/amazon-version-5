import { dateToday } from "../script/utils/getDate.js";

class DeliveryOption {
  id;
  days;
  priceCents;

  constructor (optionDetails) {
    this.id = optionDetails.id;
    this.days = optionDetails.days;
    this.priceCents = optionDetails.priceCents;
  }

  getDeliveryDate () {
    const today = dateToday();
    const deliveryDate = today.add(this.days, "days");
    const dateStr = deliveryDate.format("dddd MMMM D");

    return dateStr;
  }

  getPrice () {
    return (this.priceCents / 100).toFixed(2);
  }
}


export const deliveryOptions = [
  {
    id: 1,
    days: 7,
    priceCents: 0
  },
  {
    id: 2,
    days: 3,
    priceCents: 499
  },
  {
    id: 3,
    days: 1,
    priceCents: 999
  }
].map((optionDetails) => {
  return new DeliveryOption(optionDetails);
});