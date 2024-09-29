import Mock from "../mock";

// Ürün listesi
const productList = [
  {
    id: "1",
    imgUrl: "/assets/images/products/speaker-1.jpg",
    price: 324.0,
    totalUnit: 100,
    title: "Venue 8 Intel Atom - 16GB - Black",
    category: "audio",
    brand: "Microlab",
    rating: 1,
    freeShipping: false,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: "2",
    imgUrl: "/assets/images/products/speaker-2.jpg",
    price: 454.0,
    totalUnit: 100,
    title: "Bass Speaker",
    category: "audio",
    brand: "Microlab",
    rating: 3,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: "3",
    imgUrl: "/assets/images/products/headphone-1.jpg",
    price: 134.0,
    totalUnit: 100,
    title: "Bass Speaker",
    category: "audio",
    brand: "Sony",
    rating: 4,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: "4",
    imgUrl: "/assets/images/products/headphone-2.jpg",
    price: 987.0,
    totalUnit: 100,
    title: "Bit Bass Headphone",
    category: "audio",
    brand: "Sony",
    rating: 5,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "5",
    imgUrl: "/assets/images/products/headphone-3.jpg",
    price: 870.0,
    totalUnit: 100,
    title: "Sony Headphone",
    category: "audio",
    brand: "Sony",
    rating: 4,
    freeShipping: false,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "6",
    imgUrl: "/assets/images/products/watch-1.jpg",
    price: 23.0,
    totalUnit: 100,
    title: "Comlion Watch",
    category: "fashion",
    brand: "Comlion",
    rating: 3,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "7",
    imgUrl: "/assets/images/products/speaker-2.jpg",
    price: 454.0,
    totalUnit: 100,
    title: "Bass Speaker",
    category: "audio",
    brand: "Microlab",
    rating: 1,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "8",
    imgUrl: "/assets/images/products/headphone-4.jpg",
    price: 299.0,
    totalUnit: 100,
    title: "Beats Headphone",
    category: "audio",
    brand: "Beats",
    rating: 5,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "9",
    imgUrl: "/assets/images/products/iphone-1.jpg",
    price: 978.0,
    totalUnit: 100,
    title: "Iphone 11 Max Pro",
    category: "cellphone",
    brand: "Iphone",
    rating: 2,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "10",
    imgUrl: "/assets/images/products/iphone-2.jpg",
    price: 12.0,
    totalUnit: 100,
    title: "IPhone 11 Max Pro Case",
    category: "accessories",
    brand: "Iphone",
    rating: 4,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "11",
    imgUrl: "/assets/images/products/watch-1.jpg",
    price: 23.0,
    totalUnit: 100,
    title: "Comlion Watch",
    category: "fashion",
    brand: "Comlion",
    rating: 1,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "12",
    imgUrl: "/assets/images/products/watch-2.jpg",
    price: 75.0,
    totalUnit: 100,
    title: "Kurren Watch",
    category: "fashion",
    brand: "Kurren",
    rating: 3,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: "13",
    imgUrl: "/assets/images/products/watch-2.jpg",

    price: 978.0,
    totalUnit: 100,
    title: "Iphone 11 Max Pro",
    category: "cellphone",
    brand: "Iphone",
    rating: 5,
    freeShipping: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  }
];

// "/assets/images/laptop-1.png",
// "/assets/images/laptop-2.png",
// "/assets/images/laptop-3.png",

// Tüm ürün listesini döndüren mock API
Mock.onGet("/api/ecommerce/get-product-list").reply(() => {
  return [200, productList];
});

// ID'ye göre tek bir ürünü döndüren mock API
Mock.onGet(new RegExp("/api/ecommerce/get-product-by-id/\\d+")).reply((config) => {
  // URL'den ID'yi çekiyoruz
  const productId = config.url.split("/").pop();
  const product = productList.find((p) => p.id === productId);

  // Eğer ürün bulunamazsa 404, bulunursa 200 döndürüyoruz
  return product ? [200, product] : [404, { message: "Product not found" }];
});