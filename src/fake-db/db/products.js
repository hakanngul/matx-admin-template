import Mock from "../mock";
import shortId from "shortid";

const productList = [
    { id: shortId.generate(), title: "Bass Speaker", category: "audio", price: 324, imgUrl: "/assets/images/products/speaker-1.jpg" },
    { id: shortId.generate(), title: "Sony Headphone", category: "audio", price: 134, imgUrl: "/assets/images/products/headphone-1.jpg" },
    // Diğer ürünler...
];

Mock.onGet("/api/ecommerce/get-product-list").reply(() => {
    return [200, productList];
});