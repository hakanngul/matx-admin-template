import Mock from "../mock";
const products = [
  {
    id: 1,
    title: 'Bit Bass Headphone',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    price: 987,
    imgUrl: '/assets/images/products/headphone-2.jpg',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Bass Speaker 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    price: 454,
    imgUrl: '/assets/images/products/speaker-2.jpg',
    quantity: 1,
  },
  {
    id: 3,
    title: 'Bass Speaker 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    price: 134,
    imgUrl: '/assets/images/products/headphone-1.jpg',
    quantity: 1,
  },
];
Mock.onGet("/api/ecommerce/get-cart-list").reply(() => {
  return [200, products];
});

