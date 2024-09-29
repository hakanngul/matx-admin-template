import Mock from "../mock";

const orderDetails = {
    orderNumber: 1028,
    orderStatus: 'Unfulfilled',
    items: [
        { id: 1, name: 'Bass Speaker', price: 324, quantity: 2 },
        { id: 2, name: 'Sony Headphone', price: 134, quantity: 1 },
    ],
    shipping: { method: 'DHL', price: 15, deliveryTime: '1-3 days' },
};

Mock.onGet("/api/ecommerce/get-order-details").reply(() => {
    return [200, orderDetails];
});