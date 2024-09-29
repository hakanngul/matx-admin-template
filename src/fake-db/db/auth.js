import Mock from "../mock";

const userList = [
  { id: 1, role: "SA", name: "Jason Alexander", email: "jason@ui-lib.com", avatar: "/assets/images/face-6.jpg", age: 25 }
];

Mock.onPost("/api/auth/login").reply((config) => {
  const { email } = JSON.parse(config.data);
  const user = userList.find((u) => u.email === email);
  return user ? [200, { user }] : [400, { message: "Invalid email or password" }];
});

Mock.onPost("/api/auth/register").reply((config) => {
  const { email, username } = JSON.parse(config.data);
  if (userList.some((u) => u.email === email)) return [400, { message: "User already exists!" }];

  const newUser = { id: 2, role: "GUEST", email, username, avatar: "/assets/images/face-6.jpg" };
  userList.push(newUser);
  return [200, { user: newUser }];
});

Mock.onGet("/api/auth/profile").reply(() => {
  const payload = { user: userList[0] };
  return [200, payload];
});