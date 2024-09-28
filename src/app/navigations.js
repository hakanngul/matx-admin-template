export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "PAGES", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  {
    name: "Customers",
    icon: "people",
    children: [
      { name: "Customer List", path: "/customers/list", iconText: "CL" },
      { name: "View Customer", path: "/customers/view", iconText: "VC" },
      { name: "New Customer", path: "/customers/new", iconText: "NC" }
    ]
  },
  {
    name: "Products",
    icon: "shopping_cart",
    children: [
      { name: "Product List", path: "/products/list", iconText: "PL" },
      { name: "View Product", path: "/products/view", iconText: "VP" },
      { name: "New Product", path: "/products/new", iconText: "NP" }
    ]
  },
  {
    name: "Orders",
    icon: "receipt",
    children: [
      { name: "Order List", path: "/orders/list", iconText: "OL" }
    ]
  },
  { name: "Help Center", path: "/help-center", icon: "help" },
  { name: "Pricing", path: "/pricing", icon: "attach_money" },
  { name: "User List", path: "/users/list", icon: "people" },
  { name: "Forms", path: "/forms", icon: "description" },
  { name: "Matx List", path: "/matx-list", icon: "list" },
  {
    name: "Session/Auth", icon: "security", children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  { label: "Components", type: "label" },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
      { name: "Buttons", path: "/material/buttons", iconText: "B" },
      { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
      { name: "Dialog", path: "/material/dialog", iconText: "D" },
      { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
      { name: "Form", path: "/material/form", iconText: "F" },
      { name: "Icons", path: "/material/icons", iconText: "I" },
      { name: "Menu", path: "/material/menu", iconText: "M" },
      { name: "Progress", path: "/material/progress", iconText: "P" },
      { name: "Radio", path: "/material/radio", iconText: "R" },
      { name: "Switch", path: "/material/switch", iconText: "S" },
      { name: "Slider", path: "/material/slider", iconText: "S" },
      { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
      { name: "Table", path: "/material/table", iconText: "T" }
    ]
  },
  {
    name: "Charts",
    icon: "trending_up",
    children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  },
  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/"
  }
];
