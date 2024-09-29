import Mock from "../mock";

const brandList = [
    { title: "Sony", product: 34 },
    { title: "Beats", product: 23 },
    { title: "Iphone", product: 12 }
];

Mock.onGet("/api/ecommerce/get-brand-list").reply(() => {
    return [200, brandList];
});