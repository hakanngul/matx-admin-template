import Mock from "../mock";
import shortId from "shortid";
const customerList = [
  { id: shortId.generate(), name: "Adams Harper", address: "571 Turner Place", balance: 3868.95 }
];
Mock.onGet("/api/ecommerce/get-customer-list").reply(() => {
  return [200, customerList];
});
