import Mock from "../mock";
const orderDetails = {
  orderNumber: 1028,
  orderStatus: 'Unfulfilled',
  items: [
    { id: 1, name: 'Bass Speaker', price: 324, quantity: 2 }
  ]
};
Mock.onGet("/api/ecommerce/get-order-details").reply(() => {
  return [200, orderDetails];
});
