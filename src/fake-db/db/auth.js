import Mock from "../mock";
const userList = [
  { id: 1, role: "SA", name: "Jason Alexander", email: "jason@ui-lib.com", avatar: "/assets/images/face-6.jpg", age: 25 }
];
Mock.onPost("/api/auth/login").reply((config) => {
  const { email } = JSON.parse(config.data);
  const user = userList.find((u) => u.email === email);
  return user ? [200, { user }] : [400, { message: "Invalid email or password" }];
});
