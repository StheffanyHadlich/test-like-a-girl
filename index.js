const PRICES = {
  batom: 100,
  rimel: 50,
  corretivo: 60,
};

const REGION = {
  sul: 10,
  norte: 5,
  nordeste: 6,
  sudeste: 12,
  centroOeste: 10,
};

const getDiscount = (coupon) => {
  const regex = /\d+/;
  const discount = coupon.match(regex);

  return parseInt(discount);
};

const getItemsPrice = (items, coupon) => {
  let total = 0;
  // { batom: 1, corretivo: 2 }
  Object.keys(items).forEach((key) => {
    total += items[key] * PRICES[key];
  });

  const discount = coupon ? getDiscount(coupon) / 100 : 0;

  return total - total * discount;
};

const getShippingPrice = (name) => REGION[name];

const getTotalPrice = (items, region, coupon = "") => {
  const priceItems = getItemsPrice(items, coupon);
  const shippingPrice = priceItems >= 100 ? 0 : getShippingPrice(region);

  return priceItems + shippingPrice;
};

module.exports = {
  getTotalPrice,
  getItemsPrice,
  getShippingPrice,
  getDiscount,
};
