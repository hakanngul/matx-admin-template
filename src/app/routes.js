import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";
import CustomerList from "./views/customers/CustomerList";
import CustomerViewPage from "./views/customers/ViewCustomer";
import NewCustomerPage from "./views/customers/NewCustomer";
import ProductList from "./views/products/ProductList";
import ViewProduct from "./views/products/ViewProduct";
import NewProductPage from "./views/products/NewProduct";
import OrderList from "./views/orders/OrderList";
import HelpCenterPage from "./views/helpcenter/HelpCenter";
import ViewOrderPage from "./views/orders/ViewOrder";
import OrderFormPage from "./views/forms/OrderForm";
import InvoiceFormPage from "./views/forms/InvoiceForm";
import AccountPage from "./views/accounts/AccountPage";
import ShopPage from "./views/ecommerce/ShopPage";
import CartPage from "./views/ecommerce/CartPage";
import CheckoutPage from "./views/ecommerce/CheckoutPage";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      // customer route
      { path: "/customers/list", element: <CustomerList />, auth: authRoles.admin },
      // customer view
      { path: "/customers/view", element: <CustomerViewPage />, auth: authRoles.admin },
      // customer new
      { path: "/customers/new", element: <NewCustomerPage />, auth: authRoles.admin },
      // products list
      { path: "/products/list", element: <ProductList />, auth: authRoles.admin },
      // products view
      { path: "/products/view", element: <ViewProduct />, auth: authRoles.admin },
      // products new
      { path: "/products/new", element: <NewProductPage />, auth: authRoles.admin },
      // orders list
      { path: "/orders/list", element: <OrderList />, auth: authRoles.admin },
      // order view
      { path: "/orders/view", element: <ViewOrderPage />, auth: authRoles.admin },
      // order form
      { path: "/order-form", element: <OrderFormPage />, auth: authRoles.admin },
      // invoice order
      { path: "/invoice", element: <InvoiceFormPage />, auth: authRoles.admin },
      // account 
      { path: "/account", element: <AccountPage />, auth: authRoles.admin },
      // ecommerce
      { path: "/ecommerce/shop", element: <ShopPage />, auth: authRoles.admin },
      // { path: "/ecommerce/product-detail", element: <ProductDetailPage />, auth: authRoles.admin },
      // { path: "/ecommerce/wishlist", element: <WishlistPage />, auth: authRoles.admin },
      { path: "/ecommerce/checkout", element: <CheckoutPage />, auth: authRoles.admin },
      { path: "/ecommerce/cart", element: <CartPage />, auth: authRoles.admin },


      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      // help center
      { path: "/help-center", element: <HelpCenterPage />, auth: authRoles.admin },
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
