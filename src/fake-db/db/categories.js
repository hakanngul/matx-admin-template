import Mock from "../mock";
const categoryList = [
  { title: "audio", product: 321 },
  { title: "fashion", product: 123 },
  { title: "cellphone", product: 546 },
  { title: "accessories", product: 76 }
];
Mock.onGet("/api/ecommerce/get-category-list").reply(() => {
  return [200, categoryList];
});
