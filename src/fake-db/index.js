import Mock from "./mock";

import "./db/auth";           // Kimlik doğrulama işlemleri
import "./db/products";       // Ürün verileri ve işlemleri
import "./db/orders";         // Sipariş verileri ve işlemleri
import "./db/cart";           // Sepet işlemleri
import "./db/brands";         // Marka verileri
import "./db/categories";     // Kategori verileri
import "./db/customers";      // Müşteri verileri ve işlemleri
import "./db/users";          // Kullanıcı verileri ve işlemleri
import "./db/notification";   // Bildirim verileri ve işlemleri

Mock.onAny().passThrough();
