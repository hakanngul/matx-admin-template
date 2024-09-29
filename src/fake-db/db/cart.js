import Mock from "../mock";

const cart = [
    { productId: "1", amount: 1 },
    { productId: "2", amount: 2 },
];

Mock.onGet("/api/ecommerce/get-cart-list").reply(() => {
    return [200, cart];
});

Mock.onPost("/api/ecommerce/add-to-cart").reply((config) => {
    const { productId, amount } = JSON.parse(config.data);
    cart.push({ productId, amount });
    return [200, cart];
});