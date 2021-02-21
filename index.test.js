const {
  getTotalPrice,
  getItemsPrice,
  getShippingPrice,
  getDiscount,
} = require("./index");

describe("getItemsPrice", () => {
  it("sum the item prices", () => {
    const input = { batom: 1 };
    const coupon = "CARNAVAL10";
    const result = getItemsPrice(input, coupon);

    expect(result).toBe(90);
  });
});

describe("getShippingPrice", () => {
  it("gets shipping price per region", () => {
    const region = "sul";
    const result = getShippingPrice(region);

    expect(result).toBe(10);
  });
});

describe("getDiscount", () => {
  it("finds coupon discount percentage", () => {
    const coupon = "CARNAVAL10";
    const result = getDiscount(coupon);

    expect(result).toBe(10);
  });
});

describe("getTotalPrice", () => {
  it("calculates price for regular purchase", () => {
    const item = { corretivo: 1 };
    const region = "sul";

    const result = getTotalPrice(item, region);
    expect(result).toBe(70);
  });

  it("calculates price for purchase with no shipping costs", () => {
    const item = { batom: 1 };
    const region = "sul";

    const result = getTotalPrice(item, region);
    expect(result).toBe(100);
  });

  describe("with coupon", () => {
    it("calculates price for purchase above or equal $100", () => {
      const item = { batom: 1 };
      const region = "sul";
      const coupon = "CARNAVAL10";

      const result = getTotalPrice(item, region, coupon);
      expect(result).toBe(100);
    });

    it("calculates price for purchase above or equal $100", () => {
      const item = { batom: 1 };
      const region = "sul";
      const coupon = "CARNAVAL10";

      const result = getTotalPrice(item, region, coupon);
      expect(result).toBe(100);
    });

    it("calculates price for purchase under $100", () => {
      const item = { batom: 2 };
      const region = "sul";
      const coupon = "CARNAVAL10";

      const result = getTotalPrice(item, region, coupon);
      expect(result).toBe(180);
    });
  });
});
