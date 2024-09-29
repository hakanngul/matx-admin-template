import Mock from "../mock";
const brandList = [
  { title: "Sony", product: 34 }
];
Mock.onGet("/api/ecommerce/get-brand-list").reply(() => {
  return [200, brandList];
});
