export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "PAGES", type: "label" },
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
      { name: "Order List", path: "/orders/list", iconText: "OL" },
      { name: "View Order", path: "/orders/view", iconText: "VO" }
    ]
  },

  {
    name: "Forms", path: "/forms", icon: "description", children: [
      { name: "Order Form", path: "/order-form", iconText: "OF" },
      { name: "Invoice", path: "/invoice", iconText: "I" }
    ]
  },
  {
    name: "Session/Auth", icon: "security", children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  { name: "Account", path: "/account", icon: "account_circle" },
  { name: "Help Center", path: "/help-center", icon: "help" },
  { label: "Ecommerce", type: "label" },
  {
    name: "Ecommerce",
    icon: "shopping_cart",
    children: [
      { name: "Shop", path: "/ecommerce/shop", iconText: "S" },
      { name: "Cart", path: "/ecommerce/cart", iconText: "A" },
      { name: "Detail", path: "/ecommerce/product-detail", iconText: "D" },
      { name: "Wishlist", path: "/ecommerce/wishlist", iconText: "W" },
      { name: "Checkout", path: "/ecommerce/checkout", iconText: "C" }

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
