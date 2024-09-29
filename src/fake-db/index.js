import Mock from "./mock";

import "./db/auth";
import "./db/notification";
import "./db/products";
import "./db/orders";
import "./db/cart";
import "./db/brands";
import "./db/categories";

Mock.onAny().passThrough();
