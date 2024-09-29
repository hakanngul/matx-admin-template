import Mock from "../mock";
import shortId from "shortid";
const userList = [
  { id: shortId.generate(), name: "John Doe", email: "john.doe@example.com" }
];
Mock.onGet("/api/users/get-user-list").reply(() => {
  return [200, userList];
});
