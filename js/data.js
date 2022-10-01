const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [
  {
    id: 123,
    title: "Redmi Note 10 Pro",
    img: "https://picsum.photos/id/123/300/200",
    price: 4300000,
    model: "Xiaomi",
    addedDate: CreateNewDate(),  //askkkkk!!!!!!!!
    benefits: ["80gb", "1280gb", "Waterproof"]
  },
  {
    id: 124,
    title: "Samgung Note 20 Ultra",
    img: "https://picsum.photos/id/123/300/200",
    price: 8300000,
    model: "Samsung",
    addedDate: CreateNewDate(),  // askkkkkkkkkk!!!!
    benefits: ["32gb", "1tb"]
  }
]

const manufacturers = [
  {
    id: 1,
    name: "Xiaomi"
  },
  {
    id: 2,
    name: "Apple"
  },
  {
    id: 3,
    name: "Samsung"
  },
  {
    id: 4,
    name: "Huawei"
  }
];