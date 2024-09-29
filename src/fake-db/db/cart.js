import Mock from "../mock";
const cart = [{ productId: "1", amount: 1 }];
Mock.onGet("/api/ecommerce/get-cart-list").reply(() => {
  return [200, cart];
});
