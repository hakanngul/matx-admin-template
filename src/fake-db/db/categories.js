import Mock from "../mock";

const categoryList = [
    { title: "Audio", product: 123 },
    { title: "Cellphone", product: 321 },
    { title: "Fashion", product: 234 }
];

Mock.onGet("/api/ecommerce/get-category-list").reply(() => {
    return [200, categoryList];
});